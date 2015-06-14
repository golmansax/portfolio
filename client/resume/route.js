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
    work: i18n.t('resume:work'),
    education: i18n.t('resume:education'),
    other: i18n.t('resume:other')
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
