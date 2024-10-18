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
                zIndex: virtualItem.index === (state as any)[1] ? 1 : 0,
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
