# Welcome to the Arches Project!

Arches is a new, open-source, web-based, geospatial information system for cultural heritage inventory and management. Arches is purpose-built for the international cultural heritage field, and it is designed to record all types of immovable heritage, including archaeological sites, buildings and other historic structures, landscapes, and heritage ensembles or districts.

Please see the [project page](http://archesproject.org/) for more information on the Arches project.

The Arches Installation Guide and Arches User Guide are available [here](http://archesproject.org/documentation/).

# How to test

    docker run --rm --name some-postgres -p5432:5432 -e POSTGRES_PASSWORD=postgis postgis/postgis
    docker run --rm --name some-es -e "discovery.type=single-node" -p9200:9200 -e POSTGRES_PASSWORD=postgis elastic/elasticsearch:7.17.27
    python manage.py setup_db
    python manage.py packages -o load_package -s ./brace_demo/pkg/ # 1

# Issues

Lots of these during concept loading (1).
    
    2025-09-01 05:39:16,102 arches.app.utils.skos WARNING  duplicate key value violates unique constraint "unique_relation_bidirectional"
    DETAIL:  Key ((
    CASE
        WHEN conceptidfrom < conceptidto THEN COALESCE(conceptidfrom::text, ''::text) || COALESCE(COALESCE(','::text, ''::text) || COALESCE(conceptidto::text, ''::text), ''::text)
        ELSE COALESCE(conceptidto::text, ''::text) || COALESCE(COALESCE(','::text, ''::text) || COALESCE(conceptidfrom::text, ''::text), ''::text)
    END), relationtype)=(7f7ba48e-49f5-3c3e-892c-f10590a2a91b,e2b4dab3-7de7-3c87-a42b-a260ec174aab, related) already exists.
    
    0% [█████                         ] 100% | ETA: 00:00:52 | Item ID: FISH_Archaeological_Sciences_Thesaurus_20200127.xml

Also these (1).

    2025-09-01 05:47:11,933 arches.management.commands.packages WARNING  No branches in package
    ./brace_demo/pkg/graphs/resource_models/Modification.json
    2025-09-01 05:47:12,361 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('1241b478-c457-11e9-922c-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('1241b478-c457-11e9-922c-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Application Area.json
    2025-09-01 05:47:12,881 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0a5e6b91-860d-11ea-aa4f-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0a5e6b91-860d-11ea-aa4f-f875a44e0e11')
    ./brace_demo/pkg/graphs/resource_models/Period.json
    2025-09-01 05:47:13,230 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('3f3ec6ab-c072-11e9-8da1-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('3f3ec6ab-c072-11e9-8da1-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Monument.json
    2025-09-01 05:47:13,638 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('055b3e44-04c7-11eb-b131-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('055b3e44-04c7-11eb-b131-f875a44e0e11')
    ./brace_demo/pkg/graphs/resource_models/Historic Aircraft.json
    2025-09-01 05:47:14,134 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0278d09d-3e12-11eb-bef6-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0278d09d-3e12-11eb-bef6-f875a44e0e11')
    ./brace_demo/pkg/graphs/resource_models/Heritage Story.json
    2025-09-01 05:47:14,504 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('1df228fc-99e3-11ea-ba40-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('1df228fc-99e3-11ea-ba40-f875a44e0e11')
    ./brace_demo/pkg/graphs/resource_models/Visual Work.json
    2025-09-01 05:47:14,961 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0d85f659-d32b-11e9-9f0f-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0d85f659-d32b-11e9-9f0f-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Observation.json
    2025-09-01 05:47:15,341 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0a56b67d-9119-11ec-a428-ad03e9261309')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0a56b67d-9119-11ec-a428-ad03e9261309')
    ./brace_demo/pkg/graphs/resource_models/Provenance Activity.json
    2025-09-01 05:47:15,822 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('04ea2ddc-066f-11ea-b592-acde48001122')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('04ea2ddc-066f-11ea-b592-acde48001122')
    ./brace_demo/pkg/graphs/resource_models/Digital Resources.json
    2025-09-01 05:47:16,208 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('09c1778a-ca7b-11e9-860b-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('09c1778a-ca7b-11e9-860b-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Consultation.json
    2025-09-01 05:47:16,609 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('025ac824-51a4-11eb-9d8b-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('025ac824-51a4-11eb-9d8b-f875a44e0e11')
    ./brace_demo/pkg/graphs/resource_models/Area.json
    2025-09-01 05:47:17,086 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0f577acb-1860-11eb-99a7-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0f577acb-1860-11eb-99a7-f875a44e0e11')
    ./brace_demo/pkg/graphs/resource_models/Organization.json
    2025-09-01 05:47:17,518 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('03264b0f-8fda-11ec-bd09-a87eeabdefba')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('03264b0f-8fda-11ec-bd09-a87eeabdefba')
    ./brace_demo/pkg/graphs/resource_models/Instrument.json
    2025-09-01 05:47:18,053 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('1c3dc5c1-9118-11ec-a428-ad03e9261309')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('1c3dc5c1-9118-11ec-a428-ad03e9261309')
    ./brace_demo/pkg/graphs/resource_models/Digital Object.json
    2025-09-01 05:47:18,420 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('238a8558-8482-11ea-a687-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('238a8558-8482-11ea-a687-f875a44e0e11')
    ./brace_demo/pkg/graphs/resource_models/Sampling Activity.json
    2025-09-01 05:47:18,800 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('033578bc-1d9d-11eb-a29f-024e0d439fdb')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('033578bc-1d9d-11eb-a29f-024e0d439fdb')
    ./brace_demo/pkg/graphs/resource_models/Historic Landscape Characterization.json
    2025-09-01 05:47:19,246 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('02f036ba-482c-11ea-8e39-c4d9877d154e')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('02f036ba-482c-11ea-8e39-c4d9877d154e')
    ./brace_demo/pkg/graphs/resource_models/Project.json
    2025-09-01 05:47:19,610 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0b92e9d7-ca85-11e9-9379-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0b92e9d7-ca85-11e9-9379-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Artefact.json
    2025-09-01 05:47:20,098 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0324f685-eeca-11eb-ad54-a87eeabdefba')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0324f685-eeca-11eb-ad54-a87eeabdefba')
    ./brace_demo/pkg/graphs/resource_models/Textual Work.json
    2025-09-01 05:47:20,480 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0096f868-c073-11e9-a3ac-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0096f868-c073-11e9-a3ac-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Physical Thing.json
    2025-09-01 05:47:21,291 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('29ebcf66-47e8-11f0-8b19-020539808477')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('29ebcf66-47e8-11f0-8b19-020539808477')
    ./brace_demo/pkg/graphs/resource_models/Place.json
    2025-09-01 05:47:21,809 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('002289b3-c071-11e9-a58c-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('002289b3-c071-11e9-a58c-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Bibliographic Source.json
    2025-09-01 05:47:22,321 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('03e29850-8ecf-11ea-a419-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('03e29850-8ecf-11ea-a419-f875a44e0e11')
    ./brace_demo/pkg/graphs/resource_models/Collection or Set.json
    2025-09-01 05:47:22,814 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('11b59861-d354-11e9-bd05-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('11b59861-d354-11e9-bd05-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Maritime Vessel.json
    2025-09-01 05:47:23,233 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('0557783e-535d-11ec-b437-a87eeabdefba')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('0557783e-535d-11ec-b437-a87eeabdefba')
    ./brace_demo/pkg/graphs/resource_models/Person.json
    2025-09-01 05:47:23,705 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('05ae168a-d2bb-11e9-a2f4-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('05ae168a-d2bb-11e9-a2f4-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Group.json
    2025-09-01 05:47:24,082 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('127085d1-c05e-11e9-9b11-a4d18cec433a')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('127085d1-c05e-11e9-9b11-a4d18cec433a')
    ./brace_demo/pkg/graphs/resource_models/Activity.json
    2025-09-01 05:47:24,528 arches.app.utils.data_management.resource_graphs.importer ERROR    UUID('093a44d7-9937-11ea-9156-f875a44e0e11')
    Traceback (most recent call last):
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/utils/data_management/resource_graphs/importer.py", line 111, in import_graph
        graph = Graph(resource)
                ^^^^^^^^^^^^^^^
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 107, in __init__
        self.add_edge(edge)
      File "/home/philtweir/Code/Oscailte/Arches/brace-demo/arches/arches/app/models/graph.py", line 302, in add_edge
        edge.rangenode = self.nodes[uuid.UUID(str(egdeobj.get("rangenode_id")))]
                         ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    KeyError: UUID('093a44d7-9937-11ea-9156-f875a44e0e11')
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('1241b478-c457-11e9-922c-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0a5e6b91-860d-11ea-aa4f-f875a44e0e11')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('3f3ec6ab-c072-11e9-8da1-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('055b3e44-04c7-11eb-b131-f875a44e0e11')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0278d09d-3e12-11eb-bef6-f875a44e0e11')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('1df228fc-99e3-11ea-ba40-f875a44e0e11')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0d85f659-d32b-11e9-9f0f-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0a56b67d-9119-11ec-a428-ad03e9261309')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('04ea2ddc-066f-11ea-b592-acde48001122')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('09c1778a-ca7b-11e9-860b-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('025ac824-51a4-11eb-9d8b-f875a44e0e11')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0f577acb-1860-11eb-99a7-f875a44e0e11')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('03264b0f-8fda-11ec-bd09-a87eeabdefba')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('1c3dc5c1-9118-11ec-a428-ad03e9261309')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('238a8558-8482-11ea-a687-f875a44e0e11')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('033578bc-1d9d-11eb-a29f-024e0d439fdb')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('02f036ba-482c-11ea-8e39-c4d9877d154e')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0b92e9d7-ca85-11e9-9379-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0324f685-eeca-11eb-ad54-a87eeabdefba')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0096f868-c073-11e9-a3ac-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('29ebcf66-47e8-11f0-8b19-020539808477')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('002289b3-c071-11e9-a58c-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('03e29850-8ecf-11ea-a419-f875a44e0e11')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('11b59861-d354-11e9-bd05-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('0557783e-535d-11ec-b437-a87eeabdefba')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('05ae168a-d2bb-11e9-a2f4-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('127085d1-c05e-11e9-9b11-a4d18cec433a')
    ********************************************************************************
    ********************************************************************************
    The ontologyid of the graph you're trying to load does not exist in Arches.
    ********************************************************************************
    ********************************************************************************
    UUID('093a44d7-9937-11ea-9156-f875a44e0e11')
    ********************************************************************************
    loading resource to resource constraints
