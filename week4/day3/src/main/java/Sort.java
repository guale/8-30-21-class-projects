public class Sort {

	public static void quickSort(Integer[] arr, int low, int high){
		if (arr==null || arr.length==0){
			return;
		}

		if (low>=high){
			return;
		}

		int middle=low+(high-low)/2;
		int pivot=arr[middle];

		int i = low;
		int j = high;

		while(i<=j){
			while(arr[i]<pivot){
				i++;
			}
			while(arr[j]>pivot){
				j--;
			}
			if(i<=j){
				swap (arr, i ,j);
				i++;
				j--;
			}
		}

		if(low<j){
			quickSort(arr, low, j);
		}

		if(high>i){
			quickSort(arr, i ,high);
		}

	}

	public static void swap (Integer array[], int x, int y){
		int temp = array[x];
		array[x] = array[y];
		array[y]=temp;
	}

	public static Comparable[] mergeSort(Comparable[] list){
		if (list.length<=1){
			return list;
		}

		Comparable[] first = new Comparable[list.length/2];
		Comparable[] second = new Comparable[list.length-first.length];
		System.arraycopy(list,0,first,0,first.length);
		System.arraycopy(list, first.length, second, 0, second.length);

		mergeSort(first);
		mergeSort(second);

		merge(first,second,list);

		return list;
	}

	private static void merge(Comparable[] first, Comparable[] second, Comparable[] result){
		int iFirst=0;
		int iSecond=0;
		int iMerged=0;

		while(iFirst<first.length && iSecond<second.length){
			if(first[iFirst].compareTo(second[iSecond])<0) {
				result[iMerged] = first[iFirst];
				iFirst++;
			} else {
				result[iMerged]=second[iSecond];
				iSecond++;
			}
			iMerged++;
		}

		System.arraycopy(first, iFirst, result, iMerged, first.length-iFirst);
		System.arraycopy(second, iSecond,result,iMerged,second.length-iSecond);
	}

}
