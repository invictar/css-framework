function renderMoustache() {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, { name: '' });
  document.getElementById('target').innerHTML = rendered;

  const templateBadges = document.getElementById('template-badges').innerHTML;
  const badges = {"badges":{"headings":[1, 2, 3, 4, 5, 6]}};
  var html = Mustache.render(templateBadges, badges);
  document.getElementById('badges').innerHTML = html;
}
