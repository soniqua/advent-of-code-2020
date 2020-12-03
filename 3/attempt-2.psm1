##Powershell time

##Set up some rules:
## 1. Traversal of array is always three right, one down.
## 2. If a '#', add to a counter.
## 3. If end of row, loop back to beginning of row.

## Attempt:
## 1. Get width of array
## 2. Load line by line
## 3. Index position and loop back if required.

$arr=Get-Content input
$arr_length=$arr.length
$arrg=@("1:1","3:1","5:1","7:1","1:2")
$tree_arr=@()
foreach ($arg in $arrg) {
  #Set x and y
  $x_inc=[int]$arg.split(":")[0]
  $y_inc=[int]$arg.split(":")[1]
  $x=$x_inc
  $tree_count = 0
  $line_length=$arr[0].length
  for ( $index = $y_inc; $index -lt $arr_length; $index = $index + $y_inc){
    ##Start at position [2,1]
      $val=$arr[$index][$x]
      if ($val -eq '#'){
        #Tree
        $tree_count ++
      }
    ##Will move down to next line - check if we'd overlap
    if (($x+$x_inc) -ge $line_length){ ##IT WAS THIS. IT HAD TO BE GREATER THAN OR EQUAL TO.
      $x = $x - $line_length + $x_inc
    } else {
      $x = $x + $x_inc
    }
  }
  $tree_arr += $tree_count
}
$result=1
foreach ($num in $tree_arr) {
  $result=$result*$num
}
Write-Host($result)
