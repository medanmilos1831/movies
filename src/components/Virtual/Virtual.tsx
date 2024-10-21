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
  const handler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      !['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)
    )
      return;
    service({
      event,
      next: setState,
      collection,
    });
  };
  useEffect(() => {
    onChange(rowVirtualizer, state);
  }, [state]);
  return (
    <div
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
            <>
              {children(virtualItem, rowVirtualizer, state, collection, perRow)}
            </>
          );
        })}
      </div>
    </div>
  );
}

export { Virtual };
