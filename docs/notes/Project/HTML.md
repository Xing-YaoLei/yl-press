# 项目中HTML遇到的问题

## svgIcon图表的显示

在我们进行项目开发的过程中，通常都会遇到使用图标的地方，有的可能是使用PNG格式的图片来作为图标，因为PNG格式的图片拥有着透明的底色，这样我们给图片下方的内容修改背景颜色的时候依旧能够显示下层的颜色。

![image-20221202125629997](https://oss.oh-undefined.com/image-20221202125629997.png)

在开发过程中为了区分点击前后的样式效果，也会通过修改文字颜色、背景颜色以及图标颜色来给用户进行反馈。使用PNG的方法便是修改另一张颜色不同、图标相同的图片文件来作为反馈效果的显示。又或者是使用iconfont图标来直接修改字体颜色。

> SVG 代表Scalable Vector Graphics
>
> - 可扩展： SVG 可以在不损害图像质量的情况下放大或缩小。无论大小，它都会非常清晰。
> - 矢量：大多数图像文件类型都包含像素。矢量本质上是实时渲染图像的代码片段，将其转换为您在屏幕上看到的像素。虽然它们显示相同的图像，但背景中发生的事情却大不相同。
> - 图形：虽然它可能不为人所知，但 SVG 是一种图像文件类型，如 PNG、JPEG 或 GIF。它只是做的事情有点不同。

最近开发的项目中使用的是svg格式的图标，svg作为矢量图形，即便是放大或者缩小，对于原本的图标样式都不会出现失真的情况，所以目前也广泛的应用在前端页面中。

### stroke

`stroke`属性用于控制显示形状轮廓的颜色，如果要适应字体的颜色的话，我们可以将此属性的值设置为`currentColor`

### fill

`fill`属性用于设置形状内的颜色，如果要适应字体的颜色的话，我们可以将此属性的值设置为`currentColor`

