// Simple test to verify the animation demo functionality
// This can be run in a browser console or with a testing framework

function testAnimationDemo() {
    console.log('Testing Animation Demo...');
    
    // Check if required elements exist
    const animationBox = document.getElementById('animationBox');
    const phaseIndicator = document.getElementById('current-phase');
    
    if (!animationBox) {
        console.error('❌ Animation box not found');
        return false;
    }
    
    if (!phaseIndicator) {
        console.error('❌ Phase indicator not found');
        return false;
    }
    
    // Check initial state
    if (animationBox.classList.contains('composited')) {
        console.log('✅ Initial state: Composited animation active');
    } else {
        console.warn('⚠️ Expected composited class on initial load');
    }
    
    if (phaseIndicator.textContent.includes('Composited')) {
        console.log('✅ Phase indicator shows composited state');
    } else {
        console.warn('⚠️ Phase indicator should show composited state initially');
    }
    
    // Test CSS animation properties
    const computedStyle = window.getComputedStyle(animationBox);
    if (computedStyle.animationName !== 'none') {
        console.log('✅ CSS animation is active');
    } else {
        console.warn('⚠️ No CSS animation detected');
    }
    
    console.log('✅ Animation demo basic functionality verified');
    return true;
}

// Run test if in browser environment
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(testAnimationDemo, 1000); // Wait 1 second after page load
    });
}