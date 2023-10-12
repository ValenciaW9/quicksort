
def partition(array, low, high)
  pivot = array[high]
  pIndex = low
  i = low
  while i < high
    if array[i].to_i <= pivot.to_i
      array[i], array[pIndex] = array[pIndex], array[i]
      pIndex += 1
    end
    i += 1
  end
  array[pIndex], array[high] = array[high], array[pIndex]
  return pIndex
end

def quicksort(array, low = 0, high = array.length - 1)
  if low < high
    j = partition(array, low, high)
    quicksort(array, low, j - 1)
    quicksort(array, j + 1, high)
  end
  return array
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [1, 2, 3, 4]"
  print quicksort([3, 2, 1, 4])
  puts

  puts "Expecting: [1, 2, 2, 3, 4]"
  print quicksort([1, 2, 2, 3, 4])
  puts

  # Add your own test cases here
end


#{#{}}Pseudocode
#{#{}}##
# The code implements the quicksort algorithm to sort an array of numbers in ascending order.
# 
# Args:
#   array: The array parameter represents the array that needs to be sorted.
#   low: The `low` parameter represents the starting index of the subarray that needs to be sorted.
#   high: The `high` parameter represents the index of the last element in the array that needs to be
# sorted.
# 
# Returns:
#   The `quicksort` function returns the sorted array.