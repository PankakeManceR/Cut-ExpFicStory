// Your story paragraphs
const paragraphs = [
  "June sat on her front porch, a pile of brittle bones swaying with the wind in that old hand-carved fake wood chair. Her eyes looked baggier than they felt, but nonetheless she could tell they were grateful the baby in her arms was finally asleep; it laid so still she almost couldn’t tell the thing was breathing. The sunset was beautiful tonight. She knew she only had a few more moments to cherish it, so she made sure to do it right.",
  "She hated being back home. It bit at her, that feeling of failure - the self loathing she’d staved off for the better part of her highschool years. Even worse than being passed over or glanced at day after day were the cutting words from her mother. They rehashed the same argument they’d been having for the last week. “How could you throw away your life” this and “I never wanted that life” that, more assurances that showbiz wouldn’t have worked out followed by even more admonitions of absent parenting.",
  "She nearly spit out her drink as Andy - no, David - cracked the same joke for the tenth time. Somehow it only seemed to make her laugh even more every time she heard it. He was a thoughtful guy with a shady side - the kind of guy that made her feel she had the best of both worlds. She’d learn what that shady side was all about in a few minutes, but that hadn’t happened yet.",
  "David’s hand cracked across her face. The sting was real this time - she could already feel the red outline of those clubbed fingers forming on her ghostly cheek. That would get some sympathy. His pointer finger pressed into her chest, sending a gaudy glint across the ring she thought must be responsible for the single point of white hot pain on the tip of her cheek bone. He must not have thought of that before he hit her.",
  "The soup boiled over, sending the smell of burning vegetables careening through the dingy air of the apartment. The baby cried, the phone rang, and the landlord - what was his name? Mark? Matt? Murr, it was definitely Murr - tried to keep her ear through it all. It didn’t look like he was gonna let another month’s rent get swept under the rug. The local news blared over the TV with some nothing-burger story. “And researchers say that cerebrospinal fluid may be the next step in early diagnosis-”",
  "She stared through her reflection, through the still-red outline of the ring, thinking more about the rumbling in her stomach than the burning on her cheek. She threw up again. David - no, Andy. This was Andy. Andy burst into the room. “Hey, I’m sorry about the ring thing. They had me throw it on right before we started and I-” the smell of vomit changed the topic for him. He put a hand on her back, cursing the director under his breath, but never to his face. The burning smell got stronger. She should turn the stove off.",
  "Candace looked beautiful in her new dress. It was the first time June had brought her daughter to an event like this. She had fought and fussed over every detail of her outfit; the ripped jeans and flannel pullover of her rebellious phase weren’t right for this kind of thing. She looked like she was having fun with the who’s-who of drive-by greetings for a while. One of the producers stopped by to chat and mentioned offhand that she’d be camera ready once she cut a few pounds. She hoped the baby she was having next season wouldn’t be as hurt as Candace by that kind of thing."
  "“-significant shrinking of the hippocampus.” June’s eyes focussed for the first time in a while. Candace stood over her, dressed in her thin-striped black and red work pantsuit, talking to a tall white coat. She didn’t want to be here. Neither did June, but at least she could go somewhere else.",
  "The trees flew past the profile of Andy’s David’s face. If she could see the trees through the bright green tarp, she’d think they were going a hundred miles an hour. His face turned to her, concerned, but not with their high-speed chase. “June? June, can you hear me?” Oh god, she couldn’t remember her line. She had to leave.",
  "She rocked back in her chair and extended her ankles to hold herself there for a moment. She let the baby fall to the ground with a plastic thud, utterly unconcerned for anything but that sunset. She didn’t even have to fake it, it really took her breath away. A voice she didn’t recognize protested from a few feet away. “What the… Cut!”
];

let currentIndex = 0;
const paragraphElement = document.getElementById("story-paragraph");

// Function to update the displayed paragraph
function updateParagraph() {
  paragraphElement.textContent = paragraphs[currentIndex];
  currentIndex = (currentIndex + 1) % paragraphs.length;
}

// Initially display the first paragraph
updateParagraph();

// Change the paragraph every 5 seconds
setInterval(updateParagraph, 10000);
