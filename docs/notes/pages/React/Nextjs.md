# Next.js 路由页面与布局

## Nested routing 嵌套路由

Next.js 使用文件系统路由，其中文件夹用于创建嵌套路由。每一个文件夹名称都会被映射到路由表中。

![NextjsPic](https://oss.oh-undefined.com/202401111732618.png)

可以单独为页面创建`layout.tsx`以及`page.tsx`文件为每一个路由单独创建 UI。

`page.tsx`是一个特殊的 Next.js 文件，用于导出 React 组件，并且是路由可以访问所必需的文件。在目录中如果存在一个这样的页面文件，那么他会与路由进行关联。

需要嵌套的路由也可以通过将文件夹嵌套在彼此内部，并且在其中创建`page.tsx`文件。如下所示。

![Diagram showing how adding a folder called dashboard creates a new route '/dashboard'](https://oss.oh-undefined.com/202401111734806.png)

如上图所示，`/app/dashboard/page.tsx`与`/dashboard`路径进行了关联。访问的方法则为`https://localhost:3000`以及`https://localhost:3000/dashboard`

## 创建 dashboard 的子页面

我们可以通过在`dashboard`文件夹下方创建子文件夹来实现 dashboard 的子页面效果。

例如在`dashboard`文件夹下创建客户页面以及发票页面。分别命名为`customers`以及`invoices`。

这样我们便可以通过 http://localhost:3000/dashboard/customers 以及 http://localhost:3000/dashboard/invoices 两个链接分别访问对应的页面。

![Diagram showing how adding a folder called login creates a new route '/login'](https://oss.oh-undefined.com/202401111742715.png)

## dashboard 布局

在 Nextjs 中可以通过使用 layout.tsx 文件创建在多个页面之间共享的 UI。我们可以通过在`/dashboard`文件夹下创建一个名为`layout.tsx`的文件，并且粘贴以下代码。（根据自身需求进行。此处使用的官方模板中的部分代码文件）

```tsx
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
```

组件 `<Layout />` 接收一个 `children` 参数。此子项可以是页面，也可以是其他布局。在例子中，里面 `/dashboard` 的页面将自动嵌套在如下所示 `<Layout />` 的页面中。

![Folder structure with dashboard layout nesting the dashboard pages as children](https://oss.oh-undefined.com/202401111752333.png)

保存后可以得到页面效果为如下所示的样式。

![Dashboard page with a sidenav and a main content area](https://oss.oh-undefined.com/202401111755503.png)

在 Nextjs 中使用布局的好处是，在导航的时候，只有页面组件会更新，而布局不会重新刷新，页面是部分渲染的。

![Folder structure showing the dashboard layout nesting the dashboard pages, but only the pages UI swap on navigation](https://oss.oh-undefined.com/202401111756962.png)

## Root layout 根布局

在`/app/layout.tsx`中创建的布局，为根布局，并且是系统必须的。添加到根布局中的任何 UI 样式，都会在整个项目中的所有页面之间共享。您可以使用根布局来修改`html`、`body`标签。
