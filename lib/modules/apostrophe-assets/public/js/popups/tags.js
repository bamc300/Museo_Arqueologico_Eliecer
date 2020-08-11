/* global omUtils */

// Don't use $(function() { ... }). Instead, use the apostrophe
// "enhance" event handler to enhance any block of markup that has
// just been added to the page — such as the whole page at load time,
// or a portion of the page during an AJAX refresh.

apos.on('enhance', function ($el) {
  var $tagPicker = $el.find('[data-tag-picker]');

  // Setup from previous search
  if ($tagPicker.length > 0 && omUtils.parseParams(window.location.search).tags) {
    var tags = omUtils.parseParams(window.location.search).tags;

    if (_.isString(tags)) {
      addTag($tagPicker.find('[data-tag-picker-selected][value="' + tags + '"]'), $tagPicker);
    }

    if (_.isArray(tags)) {
      tags.forEach(function (tag) {
        addTag($tagPicker.find('[data-tag-picker-selected][value="' + tag + '"]'), $tagPicker);
      });
    }
  }

  // Events
  $tagPicker.find('[data-tag-picker-selected]').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $parent = $this.parents('[data-tag-picker]');

    if ($this.attr('data-tag-picker-selected') === 'true') {
      removeTag($this, $parent);
    } else {
      addTag($this, $parent);
    }
  });

  $tagPicker.find('[data-tag-picker-submit]').on('click', function (e) {
    e.preventDefault();
    submitTags($tagPicker);
  });

  $tagPicker.find('[data-tag-picker-clear]').on('click', function (e) {
    e.preventDefault();
    clearTags($tagPicker);
  });

  // Actions
  function removeTag ($tag, $context) {
    $tag.attr('data-tag-picker-selected', 'false');
    $context.find('[data-tag-picker-display] button[value="' + $tag.val() + '"]').remove();
    removeTagFromSelect($tag, $context);
  }

  function addTag ($tag, $context) {
    $tag.attr('data-tag-picker-selected', 'true');
    var $clone = $tag.clone();
    $clone.removeAttr('data-tag-picker-selected');
    $clone.on('click', function (e) {
      e.preventDefault();
      removeTag($clone, $context);
    });
    addTagToSelect($tag, $context);
    $context.find('[data-tag-picker-display]').append($clone);
  }

  function clearTags ($context) {
    $context.find('[data-tag-picker-selected]').attr('data-tag-picker-selected', 'false');
    $context.find('[data-tag-picker-display] button:not([data-tag-picker-submit])').each(function () {
      removeTag($(this), $context);
    });
  }

  function submitTags ($tagPicker) {
    $tagPicker.parents('form').submit();
  }

  function addTagToSelect ($tag, $context) {
    $context.siblings('select').find('option[value="' + $tag.attr('value') + '"]').attr('selected', 'selected');
  }

  function removeTagFromSelect ($tag, $context) {
    $context.siblings('select').find('option[value="' + $tag.attr('value') + '"]').removeAttr('selected');
  }
});
