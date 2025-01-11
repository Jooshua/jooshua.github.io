---
layout: page
title: VirtualSatellite
description: Part time work during my master studies
img: assets/img/nasa-yZygONrUBe8-unsplash.jpg
importance: 3
category: work
related_publications: false
attribution: >
    Thumbnail image by [NASA](https://unsplash.com/@nasa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash), on [Unsplash](https://unsplash.com/photos/view-of-earth-and-satellite-yZygONrUBe8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash). <br> 
    Inline image by [DLR](https://www.dlr.de/) licensed under [CC BY-NC-ND 3.0](https://creativecommons.org/licenses/by-nc-nd/3.0/de/)
---

During my master studies I was working part time on the open source [VirtualSatellite](https://github.com/virtualsatellite) software at the German Aerospace Center (DLR) in Brunswick.
TBD what is virsat, which tech stack

{% include figure.liquid
   path="assets/img/virSat.png"
   alt="A screenshot of the Virtual Satellite software."
   class="img-fluid"
%}

**FreeCAD Module for Virtual Satellite:** 
I developed a [Python module](https://github.com/virtualsatellite/VirtualSatellite4-FreeCAD-mod) for the CAD software FreeCAD. It can be used to display and modify visualizations of Virtual Satellite by transferring JSON data. -> FreeCAD, Python

**REST API for Virtual Satellite:** I then developed a REST API for [VirtualSatellite Core](https://github.com/virtualsatellite/VirtualSatellite4-Core) to start Virtual Satellite headless and provide a universal API to communicate with VirtualSatellite, which is also used in the FreeCAD Module. -> EMF, Eclipse IDE, Jersey, REST, Virtual Satellite Core