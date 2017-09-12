/**
 * w-vision
 *
 * LICENSE
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that is distributed with this source code.
 *
 * @copyright  Copyright (c) 2017 Woche-Pass AG (https://www.w-vision.ch)
 */

pimcore.registerNS('wvision.helpers.x');

wvision.helpers.showAbout = function () {
  var html  = '<div class="pimcore_about_window">';
      html +=   '<br /><img src="/bundles/wvision/pimcore/img/logo.svg" style="width: 300px;"><br />';
      html +=   '<br /><strong>Version: ' + wvision.version.version + '</strong>';
      html +=   '<br /><strong>Build: ' + wvision.version.build + '</strong>';
      html +=   '<br /><br />&copy; w-vision, Sursee, Switzerland (<a href="https://www.w-vision.ch/" target="_blank">www.w-vision.ch</a>)';
      html +=   '<br /><br /><a href="https://w-vision.ch/de/startseite#kennen-lernen" target="_blank">' + t('wvision_about_contact') + '</a> | ';
      html +=   '<a href="https://w-vision.ch/de/startseite#das-unternehmen" target="_blank">' + t('wvision_about_team') + '</a>';
      html += '</div>';

  var win = new Ext.Window({
    title: t('wvision_about'),
    width: 500,
    height: 310,
    bodyStyle: 'padding: 10px;',
    modal: true,
    html: html,
  });

  win.show();
};