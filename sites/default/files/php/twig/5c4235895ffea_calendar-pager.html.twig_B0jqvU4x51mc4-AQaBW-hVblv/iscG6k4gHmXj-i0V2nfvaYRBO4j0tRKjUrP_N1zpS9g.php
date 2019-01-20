<?php

/* profiles/opigno_lms/modules/contrib/calendar/templates/calendar-pager.html.twig */
class __TwigTemplate_562ec7add42da0209253af4dcb28fe6f2136d28d1395022831217245799a5713 extends Twig_Template
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
        $tags = array("if" => 12);
        $filters = array("t" => 14, "without" => 18, "default" => 19);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array('t', 'without', 'default'),
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

        // line 12
        if ((($this->getAttribute(($context["items"] ?? null), "previous", array()) || $this->getAttribute(($context["items"] ?? null), "next", array())) &&  !($context["exclude"] ?? null))) {
            // line 13
            echo "    <nav class=\"pager\" role=\"navigation\" aria-labelledby=\"pagination-heading\">
        <h4 class=\"visually-hidden\">";
            // line 14
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Pagination")));
            echo "</h4>
        <ul class=\"js-pager__items\">
            ";
            // line 16
            if ($this->getAttribute(($context["items"] ?? null), "previous", array())) {
                // line 17
                echo "                <li class=\"pager__item pager__item--previous\">
                    <a href=\"";
                // line 18
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), "previous", array()), "url", array()), "html", null, true));
                echo "\" title=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Go to previous page")));
                echo "\" rel=\"prev\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without($this->getAttribute($this->getAttribute(($context["items"] ?? null), "previous", array()), "attributes", array()), "href", "title", "rel"), "html", null, true));
                echo ">
                        <span aria-hidden=\"true\">";
                // line 19
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (($this->getAttribute($this->getAttribute(($context["items"] ?? null), "previous", array(), "any", false, true), "text", array(), "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute(($context["items"] ?? null), "previous", array(), "any", false, true), "text", array()), t("‹‹"))) : (t("‹‹"))), "html", null, true));
                echo "</span>
                        <span>";
                // line 20
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Previous")));
                echo "</span>
                    </a>
                </li>
            ";
            }
            // line 24
            echo "            ";
            if ($this->getAttribute(($context["items"] ?? null), "current", array())) {
                // line 25
                echo "                <li class=\"pager__item pager__item--current\">";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["items"] ?? null), "current", array()), "html", null, true));
                echo "</li>
            ";
            }
            // line 27
            echo "            ";
            if ($this->getAttribute(($context["items"] ?? null), "next", array())) {
                // line 28
                echo "                <li class=\"pager__item pager__item--next\">
                    <a href=\"";
                // line 29
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), "next", array()), "url", array()), "html", null, true));
                echo "\" title=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Go to next page")));
                echo "\" rel=\"next\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without($this->getAttribute($this->getAttribute(($context["items"] ?? null), "next", array()), "attributes", array()), "href", "title", "rel"), "html", null, true));
                echo ">
                        <span>";
                // line 30
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Next")));
                echo "</span>
                        <span aria-hidden=\"true\">";
                // line 31
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (($this->getAttribute($this->getAttribute(($context["items"] ?? null), "next", array(), "any", false, true), "text", array(), "any", true, true)) ? (_twig_default_filter($this->getAttribute($this->getAttribute(($context["items"] ?? null), "next", array(), "any", false, true), "text", array()), t("››"))) : (t("››"))), "html", null, true));
                echo "</span>
                    </a>
                </li>
            ";
            }
            // line 35
            echo "        </ul>
    </nav>
";
        }
        // line 38
        echo "
";
    }

    public function getTemplateName()
    {
        return "profiles/opigno_lms/modules/contrib/calendar/templates/calendar-pager.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 38,  111 => 35,  104 => 31,  100 => 30,  92 => 29,  89 => 28,  86 => 27,  80 => 25,  77 => 24,  70 => 20,  66 => 19,  58 => 18,  55 => 17,  53 => 16,  48 => 14,  45 => 13,  43 => 12,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "profiles/opigno_lms/modules/contrib/calendar/templates/calendar-pager.html.twig", "/home/piyon/o2/profiles/opigno_lms/modules/contrib/calendar/templates/calendar-pager.html.twig");
    }
}
