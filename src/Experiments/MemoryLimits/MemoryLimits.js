import React, {useMemo} from 'react';

// CSS styles
import 'jspsych/css/jspsych.css';

// jsPsych
import {initJsPsych} from 'jspsych';

// jsPsych plugins - https://www.jspsych.org/7.2/plugins/list-of-plugins/
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import htmlButtonResponse from '@jspsych/plugin-html-button-response';
import instructions from '@jspsych/plugin-instructions';
import animation from '@jspsych/plugin-animation';
import imageKeyboardResponse from '@jspsych/plugin-image-keyboard-response';



const trials = [
	{
		"test1": {
			"stimulus": "",
			"question": "",
			"solution": ""
		},
	},
	{
		"test1": {
			"stimulus": "",
			"question": "",
			"solution": ""
		},
	},
	{
		"test1": {
			"stimulus": "",
			"question": "",
			"solution": ""
		},
	}
]

function MemoryLimits(props) {
	useMemo(() => {
		// Initialize jsPsych
		const jsPsych = initJsPsych();

		// Create the experiment timeline - https://www.jspsych.org/7.2/overview/timeline/
		let timeline = [];

		// Display welcome message
		const welcome = {
			type: instructions,
			pages: [
				`<p>This experiment will test your ability to remember a number of objects.<br>In the first trial you will need to remember 2 objects; in the second trial, 3 objects; and in the third trial 4 objects.</p>`,
				`There is 1 test in this trial.`
			],
			show_clickable_nav: true
		};

		// Add welcome step to timeline
		timeline.push(welcome);

		// TRIAL 1
		// show img for 2 second
		// const animation_sequence = ["MemoryLimits/Slide1.jpeg"];
		//
		// const animation_trial = {
		// 	type: animation,
		// 	stimuli: animation_sequence,
		// 	sequence_reps: 1,
		// 	frame_time: 1000,
		// 	prompt: '<p>Observe the objects</p>',
		// };
		const t1Stimulus = {
			type: htmlKeyboardResponse,
			stimulus: '<img src="/MemoryLimits/Slide21.jpeg" alt="">',
			choices: "NO_KEYS",
			trial_duration: 1000,
		};

		timeline.push(t1Stimulus);

		const t1ResponseScreen = {
			type: imageKeyboardResponse,
			stimulus: '/MemoryLimits/Slide25.jpeg',
			choices: ['0', '1', '2'],
			prompt: "<p>How many of the objects in the first image are present in this image?<br>Press the appropriate number key.</p>",
			data: {
				task: 'response',
				correct_response: '2'
			},
			on_finish: function(data){
				data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
			}
		};

		timeline.push(t1ResponseScreen);

		timeline.push({
			type: htmlButtonResponse,
			stimulus: '<p>Continue to next trial</p>',
			choices: ['Continue'],
		});

		//	TRIAL 2
		const t2Stimulus = {
			type: htmlKeyboardResponse,
			stimulus: '<img src="/MemoryLimits/Slide1.jpeg" alt="">',
			choices: "NO_KEYS",
			trial_duration: 1000,
		};

		timeline.push(t2Stimulus);

		const t2ResponseScreen = {
			type: imageKeyboardResponse,
			stimulus: '/MemoryLimits/Slide5.jpeg',
			choices: ['0', '1', '2', '3'],
			prompt: "<p>How many of the objects in the first image are present in this image?<br>Press the appropriate number key.</p>",
			data: {
				task: 'response',
				correct_response: '2'
			},
			on_finish: function(data){
				data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
			}
		};

		timeline.push(t2ResponseScreen);

		timeline.push({
			type: htmlButtonResponse,
			stimulus: '<p>Continue to next trial</p>',
			choices: ['Continue'],
		});

		//	TRIAL 3
		const t3Stimulus = {
			type: htmlKeyboardResponse,
			stimulus: '<img src="/MemoryLimits/Slide13.jpeg" alt="">',
			choices: "NO_KEYS",
			trial_duration: 1000,
		};

		timeline.push(t3Stimulus);

		const t3ResponseScreen = {
			type: imageKeyboardResponse,
			stimulus: '/MemoryLimits/Slide15.jpeg',
			choices: ['0', '1', '2', '3', '4'],
			prompt: "<p>How many of the objects in the first image are present in this image?<br>Press the appropriate number key.</p>",
			data: {
				task: 'response',
				correct_response: '3'
			},
			on_finish: function(data){
				data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
			}
		};

		timeline.push(t3ResponseScreen);

		const trials = jsPsych.data.get().filter({task: 'response'});
		const correct_trials = trials.filter({correct: true});

		timeline.push({
			type: htmlButtonResponse,
			stimulus: `<p>You scored ${correct_trials.count()} out 3 questions correctly.</p>`,
			choices: ['Finish'],
			prompt: "Click finish to end experiment"
		});

		jsPsych.run(timeline);
	}, []);

	return (
		<>
			{/*	LEAVE EMPTY */}
		</>
	);
}

export default MemoryLimits;
