"use client"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
// icons
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CancelIcon from '@mui/icons-material/Cancel';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BackupIcon from '@mui/icons-material/Backup';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


import { Button } from '@mui/material';
const TimeLine = () => {
  return (
    <div className='mb-[3rem] '>
      <div id='' className='flex justify-center align-center gfg-gradient text-[50px] mb-[3rem] sponsor-main-title font-black'>
        <span>Timeline</span>
      </div>
      <Timeline position="alternate" style={{ color: "white" }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {/* 9:30 am */}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ background: "forestgreen" }}>
              <HowToRegIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Investor's Pitch
            </Typography>
            <Typography>Round 1&2 : 26th July, Round 3 : 27th July </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            {/* 10:00 am */}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CancelIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Estate Battle
            </Typography>
            <Typography>27 July</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <PsychologyIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Maquire
            </Typography>
            <Typography> Round 1&2 : 26th July, Round 3 : 27th July </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              BIZECO Stock Exchange (BSE)
            </Typography>
            <Typography>26 July</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {/* 9:30 am */}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ background: "forestgreen" }}>
              <BackupIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Crypteco
            </Typography>
            <Typography>Round 1&2 : 26th July, Round 3 : 27th July </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <EmojiEventsIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              AD - Stratify
            </Typography>
            <Typography>26 July</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default TimeLine