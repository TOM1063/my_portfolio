document.addEventListener("DOMContentLoaded", () => {

console.log("start");

let selected_index = null;

const indices = ["index_1","index_2","index_3","index_4","index_5","index_6"];

indices.forEach((id, index) => {
      const elem = document.getElementById(id);
      if(elem) {
            if(index == selected_index) {                        elem.style.backgroundColor = "rgba(255, 255, 255, 0)";
                  elem.style.backgroundColor = "rgb(0, 0, 0)";
                  elem.style.color = "white";};
            elem.addEventListener("click",() => {

                  indices.forEach((other_id,other_index)=> {
                        if(other_id != id) {
                              const other_elem = document.getElementById(other_id);
                              if(other_elem) {
                                    other_elem.style.backgroundColor = "rgba(255, 255, 255, 0)";
                                    other_elem.style.color = "black";
                              }else {
                                    console.error(`no element for ${other_id}`)
                              }
                        }
                  })
                  selected_index = index;
                  console.log(`index is set to ${index}`);
                  elem.style.backgroundColor = "black";
                  elem.style.color = "white";
            });

            
            elem.addEventListener("mouseover",() => {
                  elem.style.backgroundColor = "black";
                  elem.style.color = "white";
            })
            elem.addEventListener("mouseleave",() => {
                  if(index !=selected_index) {
                        elem.style.backgroundColor = "rgba(255, 255, 255, 0)";
                        elem.style.color = "black";
                  }
            })
      }else {
            console.error(`no element for ${id}`)
      }
});
});