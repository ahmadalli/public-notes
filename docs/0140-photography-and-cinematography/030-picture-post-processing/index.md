import ChildPages from '@site/src/components/child-pages';

# Picture Post-Processing

The goal of post-processing is to enhance the photo to tell the story you want to tell. It's not about making the photo look good, but rather to make it look the way you want it to look. Usually, you want to put more emphasis on the subject and use the other elements to support it.

Most of the items in here should be changed in the way that best serves the story you want to tell and these are just some **techniques** that you can use to achieve that.

## Recommended Resources

- [This document](https://studentcabletelevision.com/wp-content/uploads/2018/05/Color-Grading-Guide-Updated-Spring-2018.pdf) ([web archive link](https://web.archive.org/web/20231220082026/https://studentcabletelevision.com/wp-content/uploads/2018/05/Color-Grading-Guide-Updated-Spring-2018.pdf)) for getting a better understanding of terminology and concepts.
- [Scott Kelby's Lightroom 7-Point System](https://www.goodreads.com/book/show/57951601-scott-kelby-s-lightroom-7-point-system) As a begginer, this books helped me to create my workflow and know different techniques to achieve the desired look.
- [This video](https://www.youtube.com/watch?v=KNFaqwk8-ps) had a good example for the post-processing process.
-

## The Process

The idea is to gradually get the photo closer to the desired look, or explore different looks to find the one that feels right.

:::note

I'm using Adobe Lightroom for post-processing.

:::

Usually I follow the take these steps in order, but sometimes I would jump between steps if something needs fixing beforehand.

### Composition and Angles

Try the following adjustments and see how they affect the photo:

Enable `Upright`. Usually the `auto` mode works well, but if it doesn't, you can try the `guided` mode. Sometimes you need to rotate the photo a bit to make the angles and the horizon line straight.

Crop the photo and play with different cuts and see what works best to get the desired composition that tells the story you want to tell.

:::tip

If you can't find a good cut, maybe the photo was not composed well in the first place and lacks a clear subject and not be worth spending time on it.

:::

### Removal

Look for objects or people that are not part of your ideal look and feel. I use lightroom's `AI Removal` tool to remove them.

### Color Correction

For raw photos, change the color profile from `Adobe Color` to other profiles and see how it improves the photo. For most cases, except for portraits, `Adobe Landscape` profile works well.

Adjust the white balance, or change the tempreture and tint and see the effect these have on the photo's feel and which one works best to get the desired look.

### Lens Correction

From the `Optics` section (Lens correction tab in Lightroom Classic), check both `Remove Chromatic Aberration` and `Enable Profile Corrections`.

If there are still purple or green fringes, you can use the `Defringe` slider to correct them.

### Lighting

I usually start with the `Auto` mode, to have a good starting point. If that didn't work, instead of auto-adjusting all sliders, you can auto-adjust sliders deparately by pressing the `Shift` key then clicking the slider. Lightroom usually handles `Blacks` and `Whites` auto-adjustment well.

Lightning adjustments differ from photo to photo, and you need to experiment with different settings to find the one that works best. Here are some changes you can try:

- In photos with bright sky, start with lowering exposure to bring out the clouds and the sky, then increase shadows to bring out the details of the scene.
- If your subject or background have close tones, you can use the `Shadows` and `Highlights` to bring out the subject or soften the background.
- If the subject doesn't look punchy, try increasing contrast and see if it improves the photo.
- Tone curve helps with subtle and consistent adjustments to the lighting. [This video](https://www.youtube.com/watch?v=iIWZFiKn6vQ) is a good tutorial on using the tone curve tool.

### Color Adjustments

Use color tools to get the desired look and feel from the photo. You can both use the color mixer and point color tools to adjust `Luminance`, `Hue` and `Saturation` of the colors separately. Color adjustments help me to apply the mood I'm looking for to the photo.

[This video](https://www.youtube.com/watch?v=NFrzxc_Py9E) has some good tips on color grading.

Here are some tips:

- If the photo is too colorful, reduce `variance` to make colors more subtle.

### Noise Reduction

Depending on the capture conditions, e.g. for low-light high ISO photos, noise reduction is useful and greatly improves the photo. Lightroon's AI denoise is useful for this. [This video](https://www.youtube.com/watch?v=yvb9S66KG3A) is a good tutorial on manually reducing the noise instead of using the denoise tool.

### Effects

I usually increase `Texture`, `Clarity`, and `Dehaze`. Play with these to see which one works best to get the desired look. Here are some tips:

- Increasing `Clarity` makes water or metal surfaces shiny and nicers, but has negative effect on people's skin.
- `Dehaze` make the photo darker, but to me it also makes the blacks deeper and punchier.

Also, try adding a bit of `Vignette` (around `-10`) to the photo to draw attention to the subject and see how it looks.

### Masking

Use masks to selectively apply adjustments to specific areas of the photo. Almost all the adjustments can be applied on masks. There are different types of masks in Lightroom:

- Masks like `Subject`, `Background`, `Sky`, etc. Lightroom tries to automatically detect these and create the mask for you. Give them a try and see how accurate they are, but sometimes it doesn't work well.
- `Brusn` masks are usefule to manually create the mask. When edges are clear, `auto mask` can help making the brush selection easier and more accurate.
- `Linear Gradient` masks are useful for creating a smooth transition patter, similar to how light falls off on the scene.
- `Radial Gradient` masks are useful for creating a circular pattern, emphasizing a part of the scene.
- `Range` masks are useful, specially when combined with other masks, to balance the tone and colors, or bring out the details.

Here are some tips:

- Use brush masks on skin in portraits to soften the skin and make it more natural.

### Details

Use `Sharpening` to bring out the details of the subject. Almost all the photos benefit from increasint the sharpening.

Here are some tips:

- Check different parts of the photo after sharpening it. Over sharpening can be damaging.

## Read More

<ChildPages depth={2} />
