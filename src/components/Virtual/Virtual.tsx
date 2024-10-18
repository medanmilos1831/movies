import { useVirtualizer } from '@tanstack/react-virtual';
import { IVirtual } from './types';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Virtual<C = unknown, S = unknown>({
  collection,
  config,
  perRow = 6,
  children,
  service,
  initState,
  onChange,
}: IVirtual<C, S>) {
  const parentRef = useRef<HTMLDivElement>(null);
  const defaultConfig = useRef({
    count: Math.ceil(collection.length / perRow),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 450,
  });
  const [state, setState] = useState<S>(initState);

  const rowVirtualizer = useVirtualizer({
    ...defaultConfig.current,
    ...config,
  });
  useLayoutEffect(() => {
    let listener = (e: KeyboardEvent) => {
      service({
        event: e,
        next: setState,
        collection,
      });
    };
    if (parentRef.current) {
      parentRef.current!.addEventListener('keydown', listener);
    }
  }, []);
  useEffect(() => {
    onChange(rowVirtualizer, state);
  }, [state]);
  return (
    <div
      tabIndex={0}
      ref={parentRef}
      style={{
        height: `100vh`,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: 'relative',
          width: '100%',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          return (
            <div
              key={virtualItem.key}
              ref={rowVirtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '10px',
                padding: '10px',
              }}
            >
              {Array(perRow)
                .fill(0)
                .map((_, index) => {
                  return (
                    <React.Fragment key={index}>
                      {children(virtualItem, index, state)}
                    </React.Fragment>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Virtual };
