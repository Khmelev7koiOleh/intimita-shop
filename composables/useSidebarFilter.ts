const filterValues = ref();
export function useSidebarFilter() {
  const sidebarFilter = (i: any) => {
    filterValues.value = i;
  };
  return { sidebarFilter, filterValues };
}
