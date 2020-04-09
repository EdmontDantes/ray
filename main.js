const Ray = function() {
  return {
        length: 0,
  
        push: function(value) {
          this[this.length] = value;
          this.length++;
        },

        pop: function() {
          const popped = this[this.length - 1];
          delete this[this.length - 1];
          this.length--;
          return popped;
        },

        unshift: function(value) {
          for(let i = this.length; i >= 1; i--) {
            this[i] = this[i-1];
          }
          this[0] = value;
          this.length++;
        },

        shift: function() {
          const shifted = this[0]
          for (let i = 0; i < this.length; i++) {
            this[i] = this[i + 1];
          }
          delete this[this.length - 1];
          this.length--;
          return shifted;
        },
        
        include: function(value) {
          for (let i = 0; i < this.length; i++) {
            if(this[i] === value) {
              return true;
            }
          }
          return false;
        },
        
        indexOf: function(value) {
          for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
              return i;
            }
          }
          return -1;
        },

        reverse: function() {

          for (let i = 1; i <= this.length; i++) {
            this[0] = this[this.length - i];
            
          }
        }
      }
};


module.exports = {
  Ray,
}