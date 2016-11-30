### Live Example
https://www.nyl.graphics/wimm/wimmviewer/examples/

### Dependencies
To run this plugin, you need

- Jquery 1.1.x or 1.2.x (required)
- Font Awesome 4.x (optional)

### Installation
__By Downloading files:__

```html
<script src="https://code.jquery.com/jquery-1.12.3.min.js" integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
<script src="js/wimmviewer/dist/js/wimmviewer.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/wimmviewer/dist/css/wimmViewer.css" />

```

__With bower:__

```
bower install jquery.wimmviewer
```
### Usage

__Html structure example__

```html
<div id="slider1">
    <div class="carousel">
        <ul class="carousel_inner">
            <li class="item" style="background-image: url(https://farm9.staticflickr.com/8086/8500579154_5350408dc9_m_d.jpg);" data-url="https://farm9.staticflickr.com/8086/8500579154_b9634b810c_k_d.jpg">
            </li>
            <li class="item" style="background-image: url(https://farm6.staticflickr.com/5562/15228957152_aa3fbc582b_m_d.jpg);" data-url="https://farm6.staticflickr.com/5562/15228957152_2653d0d0e7_h_d.jpg">
            </li>
            <li class="item" style="background-image: url(https://farm7.staticflickr.com/6099/6227481066_6d55b051f6_m_d.jpg);" data-url="https://farm7.staticflickr.com/6099/6227481066_145e9fb878_o_d.jpg">
            </li>
            <li class="item" style="background-image: url(https://farm8.staticflickr.com/7276/7442226604_dabd1dcbb5_m_d.jpg);" data-url="https://farm8.staticflickr.com/7276/7442226604_f5acd3b4e2_o_d.jpg">
            </li>
            <li class="item" style="background-image: url(https://farm9.staticflickr.com/8197/8248259072_73a4f5017c_m_d.jpg);" data-url="https://farm9.staticflickr.com/8197/8248259072_caf4fa5583_k_d.jpg">
            </li>
            <li class="item" style="background-image: url(https://farm7.staticflickr.com/6123/5951683083_a1d0bc12cd_m_d.jpg);" data-url="https://farm7.staticflickr.com/6123/5951683083_a1d0bc12cd_b_d.jpg">
            </li>
        </ul>
    </div>
</div>
```
__Javascript__

```javascript
 $(function(){
        $('#slider1').WimmCarousel({
            miniatureWidth : 100,
            miniatureHeight: 100
            // Availables customizations:
            /*
             miniatureSpace: 10,
             nextText:'Next',
             prevText:'Prev',
             onImgChange : function() { console.log('changed'); },
             onNext : function() { console.log('next'); },
             onPrev : function() { console.log('previous'); },
             */
        });
    })
```
