# react-neo-scrollbar-z

A customizable React scrollbar component built on top of **Perfect Scrollbar**, with plugin support and rich APIs.
Supports **inertia scroll, load more, gradient indicators, highlight, spy, and custom plugins**.

---

[![NPM](https://img.shields.io/npm/v/react-neo-scrollbar-z.svg)](https://www.npmjs.com/package/react-neo-scrollbar-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-neo-scrollbar-z.svg)

---

### 🚀 Live Demo

👉 [Codesandbox](https://codesandbox.io/p/sandbox/rff3d2)

---

## ✨ Features

- ⚡ Lightweight and smooth scrolling, built on top of **Perfect Scrollbar**
- 🎨 Fully customizable (size, height, width, direction, easing)
- 🔌 Plugin System
  - Inertia / Momentum scroll
  - ScrollSpy
  - Highlight item
  - Gradient indicators
  - Custom "Load More" support
- 🛠 Exposed **ref API** for programmatic control
- 🔄 Many event callbacks for scroll control
- 🚀 Easy integration into lists, tables, dashboards
- 🤖 AI Suggestions (context-aware tips, empty state helper)

---

## 📦 Installation

```bash
npm install react-neo-scrollbar-z
```

---

## 🚀 Basic Usage

```tsx
import "react-neo-scrollbar-z/build/styles.css";

import React, { useRef } from "react";
import Scrollbar from "react-neo-scrollbar-z";
import { loadMorePlugin } from "react-neo-scrollbar-z";

interface Item {
  id: number;
  name: string;
}

export default function TableWithLoadMore() {
  const [items, setItems] = useState<Item[]>([]);
  const scrollbarRef = useRef<any>(null);

  useEffect(() => {
    // initial load
    setItems(
      Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
      }))
    );
  }, []);

  const loadMore = async () => {
    // simulate API delay
    await new Promise((res) => setTimeout(res, 1000));
    const start = items.length;
    const newItems = Array.from({ length: 10 }, (_, i) => ({
      id: start + i + 1,
      name: `Item ${start + i + 1}`,
    }));
    setItems((prev) => [...prev, ...newItems]);

    return hasMore; // has more
  };

  return (
    <div style={{ width: 400, margin: "20px auto" }}>
      <Scrollbar
        ref={scrollbarRef}
        maxHeight={300}
        // injectTable => find first table and apply tbody
        plugins={[
          loadMorePlugin({
            onLoadMore: loadMore,
            threshold: 50, // px
            loading: <div>Loading more rows...</div>,
            done: <div>✅ Done!</div>,
          }),
        ]}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #ccc" }}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scrollbar>
    </div>
  );
}
```

---

## ⚙️ Props

### Size Props

| Prop        | Type               | Description                      |
| ----------- | ------------------ | -------------------------------- |
| `width`     | `string \| number` | Fixed width of the container.    |
| `height`    | `string \| number` | Fixed height of the container.   |
| `maxWidth`  | `string \| number` | Maximum width of the container.  |
| `maxHeight` | `string \| number` | Maximum height of the container. |

### Core Props

| Prop                   | Type                                   | Description                                   |
| ---------------------- | -------------------------------------- | --------------------------------------------- |
| `children`             | `React.ReactNode`                      | Content inside the scrollable area.           |
| `id`                   | `string`                               | Optional unique identifier.                   |
| `effectData`           | `unknown`                              | External data for scroll effects/plugins.     |
| **Momentum / Inertia** |                                        |                                               |
| `inertia`              | `boolean`                              | Enable smooth inertia-like scrolling.         |
| `inertiaFriction`      | `number`                               | Adjust friction when inertia enabled.         |
| **Core Features**      |                                        |                                               |
| `always`               | `boolean`                              | Always show scrollbar (instead of auto-hide). |
| `disableKeyboard`      | `boolean`                              | Disable keyboard navigation.                  |
| `wheelStop`            | `boolean`                              | Stop propagation of wheel events.             |
| `style`                | `React.CSSProperties`                  | Custom CSS styles.                            |
| `options`              | `PerfectScrollbar.Options`             | Native Perfect Scrollbar options.             |
| `refScroll`            | `MutableRefObject`                     | Forwarded ref to access API.                  |
| `triggerScrollClick`   | `boolean`                              | Enable scroll-by-clicking track.              |
| `autoHide`             | `boolean`                              | Automatically hide scrollbar when inactive.   |
| `preserveScroll`       | `boolean`                              | Preserve scroll position between mounts.      |
| `autoScrollBottom`     | `boolean`                              | Auto-scroll to bottom on mount/update.        |
| `autoScrollToNewItem`  | `boolean`                              | Auto-scroll when new content is added.        |
| `scrollLock`           | `boolean`                              | Prevent body scroll when scrollbar active.    |
| `scrollSaveKey`        | `string`                               | Key for saving/restoring scroll position.     |
| `initialScroll`        | `"top" \| "bottom" \| number`          | Initial scroll position.                      |
| `smoothScroll`         | `boolean`                              | Enable smooth scrolling animations.           |
| `direction`            | `"vertical" \| "horizontal" \| "both"` | Allowed scroll directions.                    |
| `scrollDuration`       | `number`                               | Default duration for scroll animations.       |
| `scrollEasing`         | `ScrollEasingFn`                       | Custom easing function for smooth scroll.     |
| `plugins`              | `IFScrollbarPlugin[]`                  | Attach plugins (see below).                   |

### Event Callbacks

| Callback           | Params                     | Description                      |
| ------------------ | -------------------------- | -------------------------------- |
| `onScroll`         | `{x, y}`                   | Fires on scroll                  |
| `onScrollStart`    | -                          | Fires when scroll starts         |
| `onScrollStop`     | -                          | Fires when scroll stops          |
| `onReachTop`       | -                          | Fires when top is reached        |
| `onReachBottom`    | -                          | Fires when bottom is reached     |
| `onReachLeft`      | -                          | Fires when left edge is reached  |
| `onReachRight`     | -                          | Fires when right edge is reached |
| `onReachThreshold` | `percent: number`          | Fires when crossing threshold    |
| `onOverflowChange` | `(x: boolean, y: boolean)` | Fires when overflow changes      |

---

## 📚 Ref API

```ts
scrollToX(x: number, duration?: number, easing?: ScrollEasingFn)
scrollToY(y: number, duration?: number, easing?: ScrollEasingFn)
scrollToTop(duration?: number, easing?: ScrollEasingFn)
scrollToBottom(duration?: number, easing?: ScrollEasingFn)
scrollToIndex(index: number, duration?: number, easing?: ScrollEasingFn)
scrollToElement(el: HTMLElement, duration?: number, easing?: ScrollEasingFn)
scrollToPercent(yPercent: number, xPercent?: number, duration?: number, easing?: ScrollEasingFn)

update()
destroy()
getScrollbar()
getScrollElement()
```

---

## 🔌 Plugin Interface

```ts
export interface IFScrollbarPlugin {
  mountPosition?: "inside" | "outside" | "before";
  onInit?: (api: IFScrollbarRefProps, el: HTMLElement) => void;
  onScroll?: (el: HTMLElement) => void;
  onDestroy?: () => void;
  render?: () => React.ReactNode;

  onScrollStart?: (el: HTMLElement) => void;
  onScrollStop?: (el: HTMLElement) => void;
  onReachTop?: () => void;
  onReachBottom?: () => void;
  onReachLeft?: () => void;
  onReachRight?: () => void;
  onReachThreshold?: (percent: number) => void;
}
```

### List plugins
```bash
bounceEffectPlugin
bounceHighlightPlugin
gradientIndicatorPlugin
highlightItemPlugin
inertiaPlugin
loadMorePlugin
pullToRefreshPlugin
scrollSpyPlugin
snapToItemPlugin
```

### Example: Custom Load More Plugin

```tsx
import type { IFScrollbarPlugin } from "react-neo-scrollbar-z";

const myLoadMorePlugin = (onLoadMore: () => void): IFScrollbarPlugin => {
  let el: HTMLElement | null = null;

  return {
    onInit: (_api, element) => {
      el = element;
    },
    onScroll: () => {
      if (!el) return;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
        onLoadMore();
      }
    },
    onDestroy: () => {
      el = null;
    },
  };
};

export default myLoadMorePlugin;
```

```tsx
import Scrollbar from "react-neo-scrollbar-z";

import myLoadMorePlugin from "./plugins/myLoadMorePlugin";

<Scrollbar
  style={{ height: 400 }}
  plugins={[myLoadMorePlugin(() => console.log("Load more items..."))]}
>
  <ul>
    {Array.from({ length: 30 }).map((_, i) => (
      <li key={i}>Item {i + 1}</li>
    ))}
  </ul>
</Scrollbar>;
```

---

## 📋 License

**MIT**
