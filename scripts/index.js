let openEyeBottom = "M622.68,79.41c4.89,0,9.7,3.81,13.47,5.35A34.92,34.92,0,0,0,654.6,88.5c-5.83,1.94-13.16,1.19-23.74-5.32-2.8-1.77-5.16-2.44-7-1.83,5.65,1.24,7.33,3.57,11,5.35,9.12,4.74,16.88,4.87,24.41,2.75,5-1.59,7.77-3.72,10.85-5,6.65-3.24,10.39-5.28,11.13-8.83a14.83,14.83,0,0,1-5.94,4.26,24.37,24.37,0,0,0,3.42-3.17l-2.13.2c-4.56,5.34-13,8-24.81,8.32-6.84.11-14-2-21.34-5.89-1.79-1.63-4.3-2.33-7.48-2.18-2.38.34-4.32-.21-5.25-2.77C616.34,77,618.43,78.66,622.68,79.41Z"

let openEyeTop = "M625.76,64.52c-1.24,1.3-2,4.64-2.94,6l2.12-.38c2.7-10.06,9.88-12.57,21.67-13.73a37,37,0,0,1,21.7,4.28c6.9,3.68,6.93,1.56,14.76,13.15-3-13.72-12.67-14.69-20.79-20-6.09-3.4-17.3-3.39-26.8.06,9.55-5.3,21.19-5.64,32.11,1.5,2.89,1.95,5.28,2.59,7.12,1.74-5.7-1.12-7.51-3.81-11.27-5.71-9.36-5.11-17.12-4.76-24.53-1.71-4.86,2.23-7.56,3.5-10.57,6.73-6.77,7.08-7.43,11.22-8,15.53C622,69.55,623.56,65.69,625.76,64.52Z"

let tl = new TimelineMax({delay:1.5, repeat: -1, repeatDelay: 4});

let t2 = new TimelineMax({delay:1.5, repeat: -1, repeatDelay: 4});

//faster
tl.to("#open-eye-bottom", .05, {morphSVG:{shape:"#closed-eye-bottom"}, shapeIndex:22, ease:Power3.easeIn}, 0)
  .to("#open-eye-top", .05, {morphSVG:{shape:"#closed-eye-top"}, shapeIndex:23, ease:Power3.easeIn}, 0)
  .to("#open-eye-white", .05, {opacity: 0}, 0)
  .to("#open-eye-center", .05, {opacity: 0}, 0)
  .to("#open-eye-top", .05, {morphSVG:{shape:openEyeTop}, shapeIndex:2, ease:Power3.easeOut}, 0.2)
  .to("#open-eye-bottom", .05, {morphSVG:{shape:openEyeBottom}, shapeIndex:2, ease:Power3.easeOut}, 0.2)
  .to("#open-eye-white", 0, {opacity: 1}, 0.2)
  .to("#open-eye-center", 0, {opacity: 1}, 0.2);

//slower
  t2.to("#open-eye-bottom-slow", .05, {morphSVG:{shape:"#closed-eye-bottom-slow"}, shapeIndex:22, ease:Power3.easeIn}, 0)
    .to("#open-eye-top-slow", .05, {morphSVG:{shape:"#closed-eye-top-slow"}, shapeIndex:23, ease:Power3.easeIn}, 0)
    .to("#open-eye-white-slow", .05, {opacity: 0}, 0)
    .to("#open-eye-center-slow", .05, {opacity: 0}, 0)
    .to("#open-eye-top-slow", .15, {morphSVG:{shape:openEyeTop}, shapeIndex:2, ease:Power3.easeOut}, 0.2)
    .to("#open-eye-bottom-slow", .15, {morphSVG:{shape:openEyeBottom}, shapeIndex:2, ease:Power3.easeOut}, 0.2)
    .to("#open-eye-white-slow", .15, {opacity: 1}, 0.2)
    .to("#open-eye-center-slow", .15, {opacity: 1}, 0.2);

$(document).ready(function() {
  $('.button-fast').click(function(e) {
    e.preventDefault();
    $(this).addClass('on');
    $('.button-slow').removeClass('on');
    $('.animation-fast').removeClass('hidden');
    $('.animation-slow').addClass('hidden');
  });

  $('.button-slow').click(function(e) {
    e.preventDefault();
    $(this).addClass('on');
    $('.button-fast').removeClass('on');
    $('.animation-fast').addClass('hidden');
    $('.animation-slow').removeClass('hidden');
  });
});
