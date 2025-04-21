---
layout: page
title: VirtualSatellite
description: part time work during my master studies
img: assets/img/nasa-yZygONrUBe8-unsplash.png
importance: 3
category: work
related_publications: false
attribution: >
  Thumbnail image by [NASA](https://unsplash.com/@nasa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash), on [Unsplash](https://unsplash.com/photos/view-of-earth-and-satellite-yZygONrUBe8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash). <br> 
  Inline image by [DLR](https://www.dlr.de/) licensed under [CC BY-NC-ND 3.0](https://creativecommons.org/licenses/by-nc-nd/3.0/de/)
---

During my master studies I worked part-time on the open source [VirtualSatellite](https://github.com/virtualsatellite) software at the German Aerospace Center (DLR) in Brunswick.
Virtual Satellite is a Java / Eclipse / EMF application for model-based systems engineering.

{% include figure.liquid
   path="assets/img/virSat.png"
   alt="A screenshot of the Virtual Satellite software."
   class="img-fluid"
%}

**FreeCAD Module for Virtual Satellite:**
I have developed a [Python module](https://github.com/virtualsatellite/VirtualSatellite4-FreeCAD-mod) for the FreeCAD CAD software.
It can be used to display and modify visualizations of Virtual Satellite by transferring JSON data.

**REST API for Virtual Satellite:**
I then developed a REST API for the headless version of [VirtualSatellite Core](https://github.com/virtualsatellite/VirtualSatellite4-Core) build upon Jersey.
This API is also used in the FreeCAD module.
