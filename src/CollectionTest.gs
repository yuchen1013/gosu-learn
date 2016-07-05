uses gw.util.AutoMap

uses java.lang.Integer
uses java.lang.Object
uses java.lang.String


class CollectionTest {

  /**
   * This map wraps another map and provides a default value for the map via the block
   * passed into the constructor.  If a get is called on the map and null is found, the
   * block passed in will be evaluated and the return value will be stored into the map
   * for that key, then returned.  All other methods delegate directly to the wrapped map.
   */
  function AutoMapVerify() {
    var am = new AutoMap<String, Integer>(\s -> s.indexOf("s"))
    //can't find the key , return the index postion of "a" in key
    print(am.get("absxxx"))
  }

  /**
   * using iterator to remove item and index to identify item
   */
  function IteratorAndIndex() {
    var list = {"one", "two", "three"}
//    print("before iterator remove ${list.Count}, ${list}")
    for (l in list iterator m index i) {
      if (1 != i) {
        print("Here is remove it in list")
        m.remove()
      }
    }
//    print("after iterator remove ${list.Count},${list}")
  }
}