# Welcome to the Arches Project!

Arches is a new, open-source, web-based, geospatial information system for cultural heritage inventory and management. Arches is purpose-built for the international cultural heritage field, and it is designed to record all types of immovable heritage, including archaeological sites, buildings and other historic structures, landscapes, and heritage ensembles or districts.

Please see the [project page](http://archesproject.org/) for more information on the Arches project.

The Arches Installation Guide and Arches User Guide are available [here](http://archesproject.org/documentation/).

## Notes

For using the F&amp;T setup process for Arches Container Toolkit, note that you should
remove `.frontend-configuration-settings.js` as our custom approach does not overwrite
it if present (since the containers are immutable). However, on adding a new Arches
application, it will need to be updated.
