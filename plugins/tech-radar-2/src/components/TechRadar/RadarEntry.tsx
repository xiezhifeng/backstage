/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core';

import { Blip, GoldenTechBlip } from './Blip';
import RadarTooltip from './RadarTooltip';

const useStyles = makeStyles({
  text: {
    'font-size': '9px',
    fill: '#fff',
    'text-anchor': 'middle',
  },

  link: {
    cursor: 'pointer',
  },
});

const RadarEntry: FC<RadarEntryProps> = ({ title, color, inactive, url, x, y, goldenTech }) => {
  const classes = useStyles();

  return (
    <RadarTooltip title={title}>
      <g transform={`translate(${x}, ${y})`}>
        <a href={url || '#'} className={url ? classes.link : undefined}>
          {goldenTech && <GoldenTechBlip inactive={inactive} />}
          {!goldenTech && <Blip inactive={inactive} color={color} />}
        </a>
      </g>
    </RadarTooltip>
  );
};

interface RadarEntryProps {
  x: number;
  y: number;
  color: string;
  inactive: boolean;
  url?: string;
  goldenTech: boolean;
  title: string;
}

export default RadarEntry;
