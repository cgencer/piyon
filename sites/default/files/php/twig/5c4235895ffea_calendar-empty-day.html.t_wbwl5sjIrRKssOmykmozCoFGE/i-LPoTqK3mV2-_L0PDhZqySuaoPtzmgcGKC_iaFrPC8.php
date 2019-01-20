<?php

/* profiles/opigno_lms/modules/contrib/calendar/templates/calendar-empty-day.html.twig */
class __TwigTemplate_fc503c0947424b3316fac50b76f58404e78363f1eb365b009854fa95cefe015f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 13, "trans" => 16);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'trans'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 13
        if (($this->getAttribute($this->getAttribute(($context["view"] ?? null), "dateInfo", array()), "calendarType", array()) != "day")) {
            // line 14
            echo "  <div class=\"calendar-empty\">&nbsp;</div>
";
        } else {
            // line 16
            echo "  <div class=\"calendar-dayview-empty\">";
            echo t("Empty day", array());
            echo "</div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/opigno_lms/modules/contrib/calendar/templates/calendar-empty-day.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  49 => 16,  45 => 14,  43 => 13,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "profiles/opigno_lms/modules/contrib/calendar/templates/calendar-empty-day.html.twig", "/home/piyon/o2/profiles/opigno_lms/modules/contrib/calendar/templates/calendar-empty-day.html.twig");
    }
}
