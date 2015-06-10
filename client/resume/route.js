'use strict';

import React from 'react';
import i18n from 'i18next';
import BreadcrumbsList from '../breadcrumbs/list';
import Resume from './resume';
import { cachify } from 'connect-cachify-static';

var ResumeFactory = React.createFactory(Resume);
var BreadcrumbsListFactory = React.createFactory(BreadcrumbsList);

export default function ResumeRoute(req, res) {
  var resumeAttrs = {
    work: i18n.t('work').map(function (entry) {
      if (entry.image) {
        if (!entry.image.src) {
          entry.image = { src: entry.image };
        }

        entry.image.src = cachify(entry.image.src);
      }
      return entry;
    }),
    education: i18n.t('education'),
    other: i18n.t('other')
  };

  res.render('resume/page', {
    metaData: i18n.t('metaData.resume'),
    resume: React.renderToString(ResumeFactory(resumeAttrs)),
    gon: JSON.stringify(resumeAttrs),
    breadcrumbs: React.renderToString(BreadcrumbsListFactory({
      breadcrumbs: ['Resume']
    }))
  });
}
