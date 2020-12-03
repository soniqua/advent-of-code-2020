1. You start on the open square (`.`) in the top-left corner and need to reach the bottom (below the bottom-most row on your map).

  The toboggan can only follow a few specific slopes (you opted for a cheaper model that prefers rational numbers); start by counting all the trees you would encounter for the slope right 3, down 1 ('#')

  These aren't the only trees, though; due to something you read about once involving arboreal genetics and biome stability, the same pattern repeats to the right many times.

  From your starting position at the top-left, check the position that is right 3 and down 1. Then, check the position that is right 3 and down 1 from there, and so on until you go past the bottom of the map.

2. Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.

  Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

  - Right 1, down 1.
  - Right 3, down 1. (This is the slope you already checked.)
  - Right 5, down 1.
  - Right 7, down 1.
  - Right 1, down 2.

  What do you get if you multiply together the number of trees encountered on each of the listed slopes?
