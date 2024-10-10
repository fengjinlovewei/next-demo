// mdx-components.js
export function useMDXComponents(components) {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 style={{ fontSize: '30px' }}>
        {JSON.stringify(components) + '22'}
        {children}
      </h1>
    ),
  };
}
