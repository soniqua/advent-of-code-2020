#Now have three numbers that sum to 2020:

#extend original solution
target=2020

for num in $(cat input); do
  remainder=$((target-num)) ##2020-x
  for num2 in $(cat input); do
    remainder2=$((remainder-num2)) ##2020-x-y
    ##Check remainder is positive
    if [ $remainder2 -gt 0 ]; then
      if [ $(grep -e "^$remainder2$" input) ]; then ##sanitise!
        #This is a contender - check it actually adds to 2020
          if [ $((num+num2+remainder2)) == $target ]; then
            echo "solution found"
            echo "$num+$num2+$remainder2=2020!"
            echo "answer is $((num*num2*remainder2))"
            exit 0
          fi
      fi
    fi
  done
done
