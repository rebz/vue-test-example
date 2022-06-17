import { computed, ref } from '@vue/composition-api';

/**
 *
 */
export const useOffsetPagination = () => {
  // if `totalCount` is not set this composable is useless
  const totalCount = ref(0);
  const setTotalCount = (x: number) => (totalCount.value = x);

  // page controls
  const currentPage = ref(1);

  // hasura pagination variables
  const limit = ref(1);
  const offset = computed(() => {
    const offsetMultiplier = currentPage.value - 1;
    return limit.value * offsetMultiplier;
  });

  const setLimit = (x: number) => (limit.value = x);

  const hasNextPage = computed(() => {
    const maxResultsVisible = limit.value * currentPage.value;
    return maxResultsVisible < totalCount.value;
  });

  const hasPreviousPage = computed(() => currentPage.value > 1);

  const lastPage = computed(() => Math.ceil(totalCount.value / limit.value));

  // page navigation
  const setPage = (x: number) => (currentPage.value = x);

  const nextPage = () => {
    currentPage.value++;
    if (currentPage.value > lastPage.value) currentPage.value = lastPage.value;
  };

  const prevPage = () => {
    currentPage.value--;
    if (currentPage.value <= 0) currentPage.value = 1;
  };

  return {
    totalCount,
    setTotalCount,
    currentPage,
    lastPage,
    nextPage,
    prevPage,
    setPage,
    limit,
    setLimit,
    offset,
    hasNextPage,
    hasPreviousPage
  };
};

export type OffsetPagination = ReturnType<typeof useOffsetPagination>;
