document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.card'));
    const preview = document.getElementById('preview');
    const pImg = document.getElementById('preview-img');
    const pName = document.getElementById('preview-name');
    const pDesc = document.getElementById('preview-desc');

    const modal = document.getElementById('modal');
    const mImg = document.getElementById('modal-img');
    const mName = document.getElementById('modal-name');
    const mDesc = document.getElementById('modal-desc');
    const modalClose = document.getElementById('modal-close');

    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const img = card.getAttribute('data-img');
            pImg.src = img;
            pImg.alt = card.getAttribute('data-name');
            pName.textContent = card.getAttribute('data-name');
            pDesc.textContent = card.getAttribute('data-desc');

            preview.style.left = (rect.left + rect.width / 2) + 'px';
            preview.style.top = (rect.top - 12) + 'px';
            preview.classList.remove('hidden');
            preview.setAttribute('aria-hidden', 'false');
        });

        card.addEventListener('mousemove', (e) => {
            const offsetX = 0;
            const offsetY = -12;
            preview.style.left = (e.clientX + offsetX) + 'px';
            preview.style.top = (e.clientY + offsetY - 80) + 'px';
        });

        card.addEventListener('mouseleave', () => {
            preview.classList.add('hidden');
            preview.setAttribute('aria-hidden', 'true');
        });

        card.addEventListener('click', () => {
            const img = card.getAttribute('data-img');
            mImg.src = img;
            mImg.alt = card.getAttribute('data-name');
            mName.textContent = card.getAttribute('data-name');
            mDesc.textContent = card.getAttribute('data-desc');

            openModal();
        });
    });

    function openModal() {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; 
    }
    function closeModal() {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; 
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    const openSound = document.getElementById('open-sound');
    if (openSound) {
        cards.forEach(c => c.addEventListener('click', () => {
            try { openSound.currentTime = 0; openSound.play(); } catch (e) { }
        }));
    }
});
