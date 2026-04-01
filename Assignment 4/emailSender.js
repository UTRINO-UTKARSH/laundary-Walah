function sendMail() {
    // const orders = Array.from(rows.children)
    //     .filter((r) => r.classList.contains('desc-row'))
    //     .map((r) => ({
    //         Name: r.querySelector('.sname')?.innerText || '',
    //         units: r.querySelector('.s_no')?.innerText || '',
    //         price: r.querySelector('.sp')?.innerText.replace('₹', '') || ''
    //     }));

    const totalValue = total.innerText.replace(/[₹,\s]/g, '') || '0';

    const a = {
        user_name: n.value,
        email: email.value,
        total: totalValue
    };

    emailjs.send('GY4MC69oMJbGrR7x2', 'template_4diuj8h', a)
        .then((response) => {
            console.log('EmailJS sent', response);
            message.innerText = 'Email Sent! Booking confirmation is on its way.';
            message.style.backgroundColor = '#dcfce7';
            message.style.color = '#166534';
            message.classList.remove('hidden');
            setTimeout(() => message.classList.add('hidden'), 3000);
        })
        .catch((error) => {
            console.error('EmailJS error', error);
            message.innerText = 'Failed to send email, please try again later.';
            message.style.backgroundColor = '#ed3030';
            message.style.color = 'white';
            message.classList.remove('hidden');
            setTimeout(() => message.classList.add('hidden'), 3000);
        });
}