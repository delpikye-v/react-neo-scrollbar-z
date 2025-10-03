
# react-neo-scrollbar-z

A customizable React scrollbar component built on top of **Perfect Scrollbar**, with plugin support and rich APIs.  
Supports **inertia scroll, load more, gradient indicators, highlight, spy, virtualization, and custom plugins**.

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
  - Pull-to-refresh
  - Progress bar
  - Minimap
- 🛠 Exposed **ref API** for programmatic control
- 🔄 Many event callbacks for scroll control
- 🚀 Easy integration into lists, tables, dashboards
- 📊 Virtualization Support (render thousands of items smoothly, like `react-window`)

---

## 📦 Installation

```bash
npm install react-neo-scrollbar-z
```

---

## 🚀 Basic Usage

```tsx
import "react-neo-scrollbar-z/build/styles.css";

import React, { useState, useEffect, useRef } from "react";
import Scrollbar, { loadMorePlugin, pullToRefreshPlugin } from "react-neo-scrollbar-z";
import type { IFScrollbarRefProps } from "react-neo-scrollbar-z";

export default function DemoApp() {
  const scrollbarRef = useRef<IFScrollbarRefProps>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const initial = Array.from({ length: 10 }, (_, i) => ({ id: i + 1, title: "Post " + (i+1) }));
    setPosts(initial);
  }, []);

  const handleRefresh = async () => {
    await new Promise(r => setTimeout(r, 1000));
    const newPost = { id: Date.now(), title: "Refreshed " + Date.now() };
    setPosts(prev => [newPost, ...prev]);
  };

  const handleLoadMore = async () => {
    if (!hasMore) return false;
    await new Promise(r => setTimeout(r, 1000));
    const nextId = posts.length + 1;
    const newPosts = Array.from({ length: 5 }, (_, i) => ({ id: nextId + i, title: "Loaded " + (nextId + i) }));
    setPosts(prev => [...prev, ...newPosts]);
    setPage(p => p + 1);
    if (page >= 3) { setHasMore(false); return false; }
    return true;
  };

  return (
    <Scrollbar
      ref={scrollbarRef}
      maxHeight={400}
      plugins={[
        // pullToRefreshPlugin({ onRefresh: handleRefresh }),
        // loadMorePlugin({ onLoadMore: handleLoadMore }),
      ]}
    >
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </Scrollbar>
  );
}
```

---

## 📐 Props

### Layout & Size
| Prop        | Type               | Default | Description |
| ----------- | ------------------ | ------- | ----------- |
| `width`     | string / number    | —       | Fixed width |
| `height`    | string / number    | —       | Fixed height |
| `maxWidth`  | string / number    | —       | Max width |
| `maxHeight` | string / number    | —       | Max height |

### Core Behavior
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | string | — | Unique identifier |
| `children` | ReactNode | — | Content |
| `style` | CSSProperties | — | Custom styles |
| `direction` | "vertical" \| "horizontal" \| "both" | "vertical" | Scroll direction |
| `always` | boolean | false | Always show scrollbar |
| `autoHide` | boolean | true | Auto-hide scrollbar |
| `disableKeyboard` | boolean | false | Disable keyboard |
| `wheelStop` | boolean | false | Stop wheel propagation |
| `scrollLock` | boolean | false | Prevent body scroll |

### Scrolling & Effects
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inertia` | boolean | false | Enable inertia |
| `inertiaFriction` | number | 0.92 | Friction factor |
| `smoothScroll` | boolean | true | Smooth animations |
| `scrollDuration` | number | 300 | Duration for programmatic scroll |
| `scrollEasing` | function | easeInOutQuad | Custom easing |
| `autoScrollBottom` | boolean | false | Auto-scroll bottom |
| `autoScrollToNewItem` | boolean | false | Auto-scroll new item |
| `preserveScroll` | boolean | false | Save/restore position |
| `scrollSaveKey` | string | — | Storage key |
| `initialScroll` | "top" \| "bottom" \| number | "top" | Initial scroll |
| `triggerScrollClick` | boolean | false | Click track to scroll |

### Plugins & Data
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `plugins` | IFScrollbarPlugin[] | [] | Attach plugins |
| `effectData` | unknown | — | Trigger re-render |
| `options` | PerfectScrollbar.Options | — | Native options |
| `refScroll` | MutableRefObject | — | Ref API |

### Events
| Callback | Params | Description |
|----------|--------|-------------|
| `onScroll` | {x, y} | Fires on scroll |
| `onScrollStart` | — | Fires on start |
| `onScrollStop` | — | Fires on stop |
| `onReachTop` | — | Reached top |
| `onReachBottom` | — | Reached bottom |
| `onReachLeft` | — | Reached left |
| `onReachRight` | — | Reached right |
| `onReachThreshold` | percent: number | Threshold crossed |
| `onOverflowChange` | (x: boolean, y: boolean) | Overflow change |

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

### Built-in Plugins
- bounceEffectPlugin
- bounceHighlightPlugin
- gradientIndicatorPlugin
- highlightItemPlugin
- inertiaPlugin
- loadMorePlugin
- minimapPlugin
- pullToRefreshPlugin
- progressBarPlugin
- scrollSpyPlugin
- snapToItemPlugin

---

## 📊 Virtualization

`VirtualList` allows you to render tens of thousands of rows efficiently by only rendering visible items in the viewport.  

---

## 📋 License

**MIT**
