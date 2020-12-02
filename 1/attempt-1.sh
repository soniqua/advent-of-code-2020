target=2020

for num in $(cat input); do
  remainder=$((target-num))
  for res in $(cat input); do
    if [ $remainder == $res ]; then
      echo "solution found"
      echo "$num-$res=2020!"
      echo "answer is $((num*res))"
      exit 0
    fi
  done
done
