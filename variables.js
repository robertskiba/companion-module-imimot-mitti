export function getVariables() {
	const variables = {}

	//Standard Variables
	variables.currentCueName = { name: 'Name of the playing cue' }
	variables.currentCueID = { name: 'Cue ID of the playing cue' }
	variables.previousCueName = { name: 'Previous cue in playlist' }
	variables.nextCueName = { name: 'Next cue in playlist' }
	variables.selectedCueName = { name: 'Name of currently selected cue' }
	variables.selectedCueID = { name: 'Cue ID of the currently selected cue' }
	variables.playStatus = { name: 'Play/ Pause Status' }
	variables.cueTimeLeft = { name: 'Time remaining for current cue, will shorten to -MM:SS if less than 1 hour' }
	variables.cueTimeLeft_hhmmss = { name: 'Time remaining for current cue, will always show full -HH:MM:SS timecode' }
	variables.cueTimeLeft_h = { name: 'Time remaining for current cue (hours)' }
	variables.cueTimeLeft_m = { name: 'Time remaining for current cue (minutes)' }
	variables.cueTimeLeft_s = { name: 'Time remaining for current cue (seconds)' }
	variables.cueTimeElapsed = { name: 'Time elapsed for current cue, will shorten to -MM:SS if less than 1 hour' }
	variables.cueTimeElapsed_hhmmss = { name: 'Time elapsed for current cue, will always show full -HH:MM:SS timecode' }
	variables.cueTimeElapsed_h = { name: 'Time elapsed for current cue (hours)' }
	variables.cueTimeElapsed_m = { name: 'Time elapsed for current cue (minutes)' }
	variables.cueTimeElapsed_s = { name: 'Time elapsed for current cue (seconds)' }
	variables.currentCueTRT = { name: 'Total run time (TRT) for current cue, will shorten to MM:SS if less than 1 hour' }
	variables.currentCueTRT_hhmmss = {
		name: 'Total run time (TRT) for current cue, will always show full HH:MM:SS timecode',
	}
	variables.currentCueTRT_h = { name: 'Total run time (TRT) for current cue (hours)' }
	variables.currentCueTRT_m = { name: 'Total run time (TRT) for current cue (minutes)' }
	variables.currentCueTRT_s = { name: 'Total run time (TRT) for current cue (seconds)' }
	variables.currentCueAudio = { name: 'Audio mute status for current cue' }
	variables.currentCueVolume = { name: 'Audio volume for current cue in dB' }
	variables.currentCuePauseAtBeginning = { name: 'Pause At Beginning status for current cue' }
	variables.currentCuePauseAtEnd = { name: 'Pause At End status for current cue' }
	variables.currentCueFadeIn = { name: 'Fade In status for current cue' }
	variables.currentCueFadeOut = { name: 'Fade Out status for current cue' }
	variables.currentCueLoop = { name: 'Loop status for current cue' }
	variables.currentCueTransition = { name: 'Transition status for current cue' }
	variables.currentCueGoto = { name: 'Goto status for current cue' }
	variables.currentCuePlaybackSpeed = { name: 'Current playback speed for current cue' }
	variables.video_outputs = { name: 'Current status of video outputs' }
	variables.audio_outputs = { name: 'Current status of audio outputs' }

	//Cue Variables
	for (const cueID of this.playlistCueIDs()) {
		variables[`cue_${cueID}_cueName`] = { name: `Cue ${cueID} - Name` }
	}

	return variables
}

export function getCueVariableValues() {
	const values = {}

	for (const cueID of this.playlistCueIDs()) {
		values[`cue_${cueID}_cueName`] = this.cues[cueID]?.cueName
	}

	return values
}
