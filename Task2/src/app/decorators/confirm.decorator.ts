export function Confirm(message: string) {
  return function (
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
  ) {
    const baseMethod = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {     
      if (window.confirm(message)) {
        return baseMethod.apply(this, args);
      }
    };

    return propertyDescriptor;
  };
}
