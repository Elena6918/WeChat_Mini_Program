const AV = require('../utils/av-weapp-min');

class CreatePlay extends AV.Object {
  get title() {
    return this.get('title');
  }
  set title(value) {
    this.set('title', value);
  }

  get content() {
    return this.get('content');
  }
  set content(value) {
    this.set('content', value);
  }
}

AV.Object.register(CreatePlay, 'CreatePlay');
module.exports = CreatePlay;
