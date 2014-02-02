/**
 * Created by donat056 on 2/1/14.
 */

function makeEdition(){
    var index = -1;
    var lastIndexAdded = 0;
    var array = new Array(5);
    return{
        getArray: function(posn){
            return array[posn];
        },

        save: function (content){
            if (index < 5) {
            array[index + 1] = content;
            index++;
            lastIndexAdded = index;
            } else {
                array.shift();
                array.push(content);
            }


        },

        undo:function (){
            if (index > 0) {
                var lastSave = array[index]
                index--;
                return lastSave;
            } else {
                return array[0];
            }
            },

        redo: function (){
                if (lastIndexAdded > index) {
                    index++;
                    return array[index]
                } else {
                    return array[lastIndexAdded]
                }

            }
        }
    }

    function countCharacters(content) {
        return content.length;
    }


    module.exports.countCharacters = countCharacters;
    module.exports.makeEdition = makeEdition;

