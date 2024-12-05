const { NotImplementedError } = require("../extensions/index.js");

module.exports = class BloomFilter {
  /**
   * @param {number} size - the size of the storage.
   */
  constructor(size) {
    this.size = size;
    this.num_element = 0; 
    this.hashCount = 0; 
    this.createStore(this.size);
    // Bloom filter size directly affects the likelihood of false positives.
    // The bigger the size the lower the likelihood of false positives.
  }

  /**
   * @param {string} item
   */
  insert(item) {
    this.num_element++;
    this.hashCount = Math.ceil((this.size/this.num_element)* Math.log(2));
    this.hahahahahehehehehehashes(item).forEach(hashValue => { 
      this.bitArray[hashValue] = 1; 
    });
    return;
    // remove line with error and write your code here
  }

  /**
   * @param {string} item
   * @return {boolean}
   */
  mayContain(item) {
    
    // remove line with error and write your code here
  }

  /**
   * Creates the data store for our filter.
   * We use this method to generate the store in order to
   * encapsulate the data itself and only provide access
   * to the necessary methods.
   *
   * @param {number} size
   * @return {Object}
   */
  createStore(size) { // ???????? !!!!!!! &&&&&&&&
    this.bitArray = new Array(size).fill(0);
    return;
    // remove line with error and write your code here
  }
  
  hahahahahehehehehehashes(item){
    this.hashArray = new Array(this.hashCount)
    for (let i = 0; i < this.hashCount; i++){
      switch(i){
        case 0:
          this.hashArray[i] = this.hash1(item);
          break;
        case 1:
          this.hashArray[i] = this.hash2(item);
          break;
        default:
          this.hashArray[i] = this.hash3(item, i);
          break;
      }
    }
    return this.hashArray;
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash1(item) {
    const crypto = require('crypto'); 
    const hash = crypto.createHash('sha256'); 
    hash.update(item); 
    return parseInt(hash.digest('hex'), 16) % this.size;
    // remove line with error and write your code here
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash2(item) {
    const crypto = require('crypto'); 
    const hash = crypto.createHash('md5'); 
    hash.update(item); 
    return parseInt(hash.digest('hex'), 16) % this.size;
    // remove line with error and write your code here
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash3(item , i) {
    switch(i%3){
      case 0:
        const crypto = require('crypto'); 
        const hash = crypto.createHash('sha1'); 
        hash.update(item+i); 
        return parseInt(hash.digest('hex'), 16) % this.size;
      case 1:
        return this.hash1(item+i);
       case 2:
        return this.hash2(item+i);
   }
    // remove line with error and write your code here
  }

  /**
   * Runs all 3 hash functions on the input and returns an array of results.
   *
   * @param {string} item
   * @return {number[]}
   */
  getHashValues(item) {
    return this.hahahahahehehehehehashes(item).every(hashValue => this.bitArray[hashValue] === 1);
    // remove line with error and write your code here
  }
};

/*
And as we fall,
The spirit carries on,
THAT A HERO COME AND SAAVE US ALL!!!!!!!!!!!!
As we call, 
The ones we left below,
WE ALL DREAM OFF THE DAAY WE RISE ABOVE!!!!!!!!!!!
*/

const bloom = new BloomFilter(100); 
bloom.insert('da'); 
console.log(bloom.getHashValues('da')); 
console.log(bloom.getHashValues('net'));