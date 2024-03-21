export default function sortedFunc(arr){
  return arr.sort((a,b) => b.health - a.health)
}
