declare function plugin(options?: Partial<{spacing: string | number}>): {
  handler: () => void;
};

declare namespace plugin {
  const __isOptionsFunction: true;
}

export = plugin;
