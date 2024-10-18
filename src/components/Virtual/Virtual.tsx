import { useVirtualizer } from '@tanstack/react-virtual';
import React, { useEffect, useRef, useState } from 'react';
import { IVirtual } from './types';

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
    estimateSize: () => 430,
  });
  const [state, setState] = useState<S>(initState);

  const rowVirtualizer = useVirtualizer({
    ...defaultConfig.current,
    ...config,
  });
  const handler = (event: React.KeyboardEvent<HTMLDivElement>) =>
    service({
      event,
      next: setState,
      collection,
    });
  useEffect(() => {
    onChange(rowVirtualizer, state);
  }, [state]);
  return (
    <div
      tabIndex={0}
      ref={parentRef}
      onKeyDown={handler}
      style={{
        height: `100vh`,
        overflow: 'auto',
      }}
    >
      <div
        className="relative w-full"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          return (
            <div
              key={virtualItem.key}
              ref={rowVirtualizer.measureElement}
              className={`absolute top-0 left-0 w-full grid grid-cols-6 gap-2.5 p-2 ${
                virtualItem.index === (state as any)[1] ? 'z-10' : 'z-0'
              }`}
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {Array(perRow)
                .fill(null)
                .map((_, index) => {
                  return (
                    <React.Fragment key={index}>
                      {children(
                        virtualItem,
                        index,
                        state,
                        collection[virtualItem.index * perRow + index]
                      )}
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
