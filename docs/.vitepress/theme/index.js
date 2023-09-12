import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
        // Get frontmatter and route
        const { frontmatter } = useData();
        const route = useRoute();
        
        // Obtain configuration from: https://giscus.app/
        giscusTalk({
            repo: 'CompetitiveExamNotes/NotesForAssamComepetitiveExam',
            repoId: 'R_kgDOJ7Jx7A',
            category: 'Announcements', // default: `General`
            categoryId: 'DIC_kwDOJ7Jx7M4CX3Un',
            mapping: 'url', // default: `pathname`
            inputPosition: 'bottom', // default: `top`
            lang: 'en', // default: `zh-CN`
            // ...
        }, {
            frontmatter, route
        });
    }
};
