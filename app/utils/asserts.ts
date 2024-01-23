export function assertIsDefined<T>(
  value: T | undefined | null,
  message?: string
): asserts value is T {
  if (value === undefined || value === null) {
    throw new Error(
      message || "Expected value to be defined, but it was undefined or null"
    );
  }
}
