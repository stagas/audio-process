
/**
 * Create a stereo script processor node `fn`
 * for `context` with sample size `samples`.
 *
 * @param {AudioContext} context
 * @param {Number} samples 
 * @param {Function} fn
 * @return {AudioNode}
 */

module.exports = function(context, samples, fn){
  var node = context.createScriptProcessor(samples, 1, 2);
  node.onaudioprocess = onaudioprocess;

  return node;

  function onaudioprocess(ev){
    fn(
      ev.outputBuffer.getChannelData(0)
    , ev.outputBuffer.getChannelData(1)
    , ev
    );
  }
};
