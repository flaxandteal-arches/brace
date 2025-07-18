define([
    'knockout',
    'jquery',
    'arches',
    'viewmodels/workflow',
    'viewmodels/alert',
    'viewmodels/workflow-step',
    'templates/views/components/plugins/correspondence-workflow.htm',
    'views/components/workflows/correspondence-select-resource',
    'views/components/workflows/correspondence-final-step'
], function(ko, $, arches, Workflow, AlertViewModel, Step, CorrespondenceWorkflowTemplate) {
    return ko.components.register('correspondence-workflow', {
        viewModel: function(params) {
            this.componentName = 'correspondence-workflow';

            this.stepConfig = [
                {
                    title: 'Select Related Consultation',
                    name: 'select-related-consultation',
                    informationboxdata: {
                        heading: 'Select Related Consultation',
                        text: 'Select a consultation and a letter type to create a Letter',
                    },
                    required: true,
                    layoutSections: [
                        {
                            componentConfigs: [
                                {
                                    componentName: 'correspondence-select-resource',
                                    uniqueInstanceName: 'correspondence-select-resource',
                                    tilesManaged: 'one',
                                    parameters: {
                                        graphid: '8d41e49e-a250-11e9-9eab-00224800b26d',
                                        nodegroupid: '8d41e4b4-a250-11e9-993d-00224800b26d',
                                        hiddenNodes: "[87e0b839-9391-11ea-8a85-f875a44e0e11]",
                                    },
                                },
                            ], 
                        },
                    ],
                },
                {
                    title: 'Correspondence Workflow Complete',
                    name: 'correspondence-complete',
                    informationboxdata: {
                        heading: 'Correspondence Workflow Complete',
                        text: 'A letter has been created. click Download to review the letter',
                    },
                    layoutSections: [
                        {
                            componentConfigs: [
                                { 
                                    componentName: 'correspondence-final-step',
                                    uniqueInstanceName: 'correspondence-final',
                                    tilesManaged: 'none',
                                    parameters: {
                                        graphid: '8d41e49e-a250-11e9-9eab-00224800b26d',
                                        nodegroupid: '8d41e4d1-a250-11e9-9a12-00224800b26d',
                                        correspondenceData: "['select-related-consultation']['correspondence-select-resource']",
                                        resourceid: "['select-related-consultation']['correspondence-select-resource']['resourceInstanceId']",
                                        tileid: "['select-related-consultation']['correspondence-select-resource']['tileId']",
                                        fileName: "['select-related-consultation']['correspondence-select-resource']['fileTileData']['name']",
                                        dataURL: "['select-related-consultation']['correspondence-select-resource']['fileTileData']['url']",
                                    },
                                },
                            ], 
                        },
                    ],
                }
            ];

            Workflow.apply(this, [params]);
            this.quitUrl = arches.urls.plugin('init-her-workflow');
            this.reverseWorkflowTransactions = function() {
                const quitUrl = this.quitUrl;
                return $.ajax({
                    type: "POST",
                    url: arches.urls.transaction_reverse(this.id())
                }).then(function() {
                    params.loading(false);
                    window.location.href = quitUrl;
                });
            };

            this.quitWorkflow = function(){
                this.alert(
                    new AlertViewModel(
                        'ep-alert-red',
                        'Are you sure you would like to delete this workflow?',
                        'All data created during the course of this workflow will be deleted.',
                        function(){}, //does nothing when canceled
                        () => {
                            params.loading('Cleaning up...');
                            this.reverseWorkflowTransactions();
                        },
                    )
                );
            };
        },
        template: CorrespondenceWorkflowTemplate
    });
});
