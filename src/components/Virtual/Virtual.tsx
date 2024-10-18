import { useVirtualizer } from '@tanstack/react-virtual';
import { IVirtual } from './types';
import { useRef, useState } from 'react';

function Virtual<T = unknown>({ collection, config, perRow = 6 }: IVirtual<T>) {
  const parentRef = useRef(null);
  const defaultConfig = useRef({
    count: Math.ceil(collection.length / perRow),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 450,
  });
  const [[xAxis, yAxis], setActive] = useState<[xAxis: number, yAxis: number]>([
    0, 0,
  ]);

  const rowVirtualizer = useVirtualizer({
    ...defaultConfig.current,
    ...config,
  });
  return (
    <div
      ref={parentRef}
      style={{
        height: `100vh`,
        overflow: 'auto',
      }}
      onKeyDown={(e) => {}}
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
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        maxWidth: '100%',
                      }}
                    >
                      <div
                        className="relative h-full w-full"
                        style={{
                          background: 'green',
                        }}
                      >
                        <div></div>
                      </div>
                    </div>
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
