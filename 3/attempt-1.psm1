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
$x=3
$arr_length=$arr.length
$tree_count = 0
$line_length=$arr[0].length
for ( $index = 1; $index -lt $arr_length; $index ++){
  ##Start at position [2,1]
    $val=$arr[$index][$x]
    Write-Host("Val=$val at $($index+1) : $($x+1)")
    if ($val -eq '#'){
      #Tree
      $tree_count ++
    }
  ##Will move down to next line - check if we'd overlap
  if (($x+3) -ge $line_length){ ##THIS WAS STUMPING ME FOR AGES. IT HAD TO BE GREATER THAN OR EQUAL TO. :@
    $x = $x - $line_length + 3
  } else {
    $x = $x + 3
  }
}

Write-Host $tree_count
