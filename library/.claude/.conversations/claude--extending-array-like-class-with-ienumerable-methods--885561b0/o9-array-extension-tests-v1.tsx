import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Array Extension Tests v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}testCopy() {
    // Basic array copy
    let arr = f([1, 2, 3]);
    let copy = arr.copy();
    this.assertEquals(copy.equals(arr), true, "1. Copy should equal original array");
    
    // Modify copy shouldn't affect original
    copy.set(0, 99);
    this.assertEquals(arr.at(0), 1, "2. Modifying copy shouldn't affect original");
    
    // Empty array copy
    let empty = f([]);
    this.assertEquals(empty.copy().length(), 0, "3. Empty array copy should be empty");
    
    // Array with objects (shallow copy)
    let objArr = f([{x: 1}, {x: 2}]);
    let objCopy = objArr.copy();
    objCopy.at(0).x = 99;
    this.assertEquals(objArr.at(0).x, 99, "4. Object references should be shared in shallow copy");
}

testSelectMany() {
    // Basic flattening
    let arr = f([[1, 2], [3, 4]]);
    let flat = arr.selectMany(x => x);
    this.assertEquals(flat.equals([1, 2, 3, 4]), true, "1. Basic array flattening");
    
    // Empty array
    let empty = f([]);
    this.assertEquals(empty.selectMany(x => x).length(), 0, "2. Empty array selectMany");
    
    // Array with empty arrays
    let withEmpty = f([[], [1], [], [2, 3]]);
    this.assertEquals(withEmpty.selectMany(x => x).equals([1, 2, 3]), true, "3. Array with empty subarrays");
    
    // Transform and flatten
    let objects = f([{nums: [1, 2]}, {nums: [3, 4]}]);
    this.assertEquals(
        objects.selectMany(x => x.nums).equals([1, 2, 3, 4]),
        true,
        "4. Transform and flatten objects"
    );
}

testOrderBy() {
    // Numbers
    let nums = f([3, 1, 4, 1, 5]);
    this.assertEquals(nums.orderBy().equals([1, 1, 3, 4, 5]), true, "1. Number sorting");
    
    // Strings
    let strs = f(["banana", "apple", "cherry"]);
    this.assertEquals(strs.orderBy().equals(["apple", "banana", "cherry"]), true, "2. String sorting");
    
    // Dates
    let dates = f([new Date(2023, 0, 1), new Date(2022, 0, 1)]);
    this.assertEquals(
        dates.orderBy().first().getFullYear(),
        2022,
        "3. Date sorting"
    );
    
    // Booleans
    let bools = f([true, false, true, false]);
    this.assertEquals(bools.orderBy().equals([false, false, true, true]), true, "4. Boolean sorting");
    
    // Empty array
    let empty = f([]);
    this.assertEquals(empty.orderBy().length(), 0, "5. Empty array sorting");
    
    // With selector
    let objects = f([{x: 3}, {x: 1}, {x: 2}]);
    this.assertEquals(
        objects.orderBy(o => o.x).select(o => o.x).equals([1, 2, 3]),
        true,
        "6. Sorting with selector"
    );
}

testOrderByDescending() {
    // Numbers
    let nums = f([3, 1, 4, 1, 5]);
    this.assertEquals(nums.orderByDescending().equals([5, 4, 3, 1, 1]), true, "1. Number sorting descending");
    
    // Strings
    let strs = f(["banana", "apple", "cherry"]);
    this.assertEquals(strs.orderByDescending().equals(["cherry", "banana", "apple"]), true, "2. String sorting descending");
    
    // Dates
    let dates = f([new Date(2023, 0, 1), new Date(2022, 0, 1)]);
    this.assertEquals(
        dates.orderByDescending().first().getFullYear(),
        2023,
        "3. Date sorting descending"
    );
    
    // Booleans
    let bools = f([true, false, true, false]);
    this.assertEquals(bools.orderByDescending().equals([true, true, false, false]), true, "4. Boolean sorting descending");
    
    // Empty array
    let empty = f([]);
    this.assertEquals(empty.orderByDescending().length(), 0, "5. Empty array sorting descending");
    
    // With selector
    let objects = f([{x: 3}, {x: 1}, {x: 2}]);
    this.assertEquals(
        objects.orderByDescending(o => o.x).select(o => o.x).equals([3, 2, 1]),
        true,
        "6. Sorting with selector descending"
    );
}`}
        </CodeBox>
    </Chapter>
);
